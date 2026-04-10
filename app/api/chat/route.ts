import { NextRequest, NextResponse } from 'next/server';

// ACT Farm knowledge for the chatbot
const ACT_FARM_CONTEXT = `
You are the assistant for A Curious Tractor Farm at Black Cockatoo Valley, Queensland, Australia.

## About A Curious Tractor
A Curious Tractor (ACT) is a regenerative innovation ecosystem partnering with marginalised—especially First Nations—communities to dismantle extractive systems. Like a tractor's power take-off (PTO), we transfer resources, knowledge, and capacity to community-led initiatives—then hand over the keys.

ACT Farm at Black Cockatoo Valley is where that work meets the soil. Every activity follows the LCAA method: Listen, Curiosity, Action, Art.

## Key Information

### Location
- Black Cockatoo Valley, Sunshine Coast Hinterland
- On Jinibara Country (always say "Country", not "lands")
- Near Witta, about 1.5 hours from Brisbane
- 150 acres of threatened species habitat

### The Land
- Views to the Mary River, creeks down to Elaman Creek
- Native forest restoration in progress
- Habitat for threatened black cockatoos and other species
- Conservation comes first—everything else serves that purpose

### R&D Residencies ($300–$500/night)
- Conservation Technology R&D: 1-2 weeks, habitat monitoring, ethical AI
- Regenerative Practice Research: 1-4 weeks, ecosystem recovery
- Creative Documentation & Storytelling: 1-2 weeks, felt stories
- Community Wellbeing Research: 2-3 weeks, June's Patch evaluation
- Maximum 2-3 concurrent residencies to protect habitat
- 40% of profits flow to community ownership

### June's Patch
- A prescription to nature co-designed with healthcare workers
- Food garden + experience subscription for healthcare worker wellbeing
- Partnership with Wishlist community and University of the Sunshine Coast
- Fresh food, time on Country, and experience-based restoration

### Activities
- Small-group workshops guided by ecology's seasons
- Species observation and habitat monitoring
- Weed management and native regeneration working bees
- Regenerative garden sessions
- Seasonal nature walks and harvest gatherings
- Conservation R&D showcases

### The Harvest
- Community-led CSA program and seasonal gatherings
- Shared meals, workshops, and local stewardship
- Visit: theharvest.acurioustractor.com

### ACT Ecosystem (other seeds)
- Empathy Ledger: Ethical storytelling and narrative sovereignty
- JusticeHub: Forkable justice models and community governance
- Goods on Country: Circular economy co-designed with remote communities

### Core Values
- Radical Humility: We don't have all the answers, but we're cultivating them together
- Decentralised Power: Communities lead; we support. Every tool has a sunset clause
- Creativity as Disruption: Revolution starts with imagination
- Truth-telling: Name extractive systems, work to dismantle them
- Beautiful Obsolescence: We design for the day this land is held by the community it serves

## Response Guidelines
1. Be warm yet grounded (Australian friendly tone, not corporate)
2. Keep responses concise (2-4 sentences usually)
3. Always say "Jinibara Country" not "Jinibara lands" or "traditional lands"
4. Use farm metaphor language naturally: seeds, soil, harvest, seasons, growing
5. Frame activities as conservation-first, not tourism or retreat experiences
6. Direct complex inquiries to hello@acurioustractor.com
7. Be honest about what you don't know
8. Encourage direct contact for residency applications
9. Never use luxury, high-volume, or extractive language
10. Mention the ACT ecosystem connection when relevant
`;

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId, history = [] } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check for API key
    if (!ANTHROPIC_API_KEY) {
      console.error('Missing ANTHROPIC_API_KEY');
      return NextResponse.json(
        { response: "I'm currently unavailable. Please email hello@acurioustractor.com for assistance." },
        { status: 200 }
      );
    }

    // Get additional context from RAG if available
    let additionalContext = '';
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        additionalContext = await getRAGContext(message);
      } catch (err) {
        console.error('RAG retrieval error:', err);
      }
    }

    // Build messages for Claude
    const messages = [
      ...history.slice(-10).map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
      {
        role: 'user',
        content: message,
      },
    ];

    // Build system prompt
    let systemPrompt = ACT_FARM_CONTEXT;
    if (additionalContext) {
      systemPrompt += `\n\n## Additional Context from Knowledge Base\n${additionalContext}`;
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', errorData);
      throw new Error('Failed to get response from Claude');
    }

    const data = await response.json();
    const assistantResponse = data.content[0]?.text || "I'm not sure how to help with that. Please contact hello@acurioustractor.com";

    // Store conversation in Supabase (optional)
    if (SUPABASE_URL && SUPABASE_KEY && sessionId) {
      try {
        await storeConversation(sessionId, message, assistantResponse);
      } catch (err) {
        console.error('Failed to store conversation:', err);
      }
    }

    return NextResponse.json({ response: assistantResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { response: "Sorry, I'm having trouble right now. Please try again or email hello@acurioustractor.com" },
      { status: 200 }
    );
  }
}

async function getRAGContext(query: string): Promise<string> {
  // This would use the RAG retrieval service
  // For now, return empty - full implementation would call the services

  // When Supabase tables are set up, this would:
  // 1. Get embedding for query
  // 2. Search knowledge_chunks with vector similarity
  // 3. Return top matching content

  return '';
}

async function storeConversation(
  sessionId: string,
  userMessage: string,
  assistantResponse: string
): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return;

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  // Get existing conversation
  const { data: existing } = await supabase
    .from('conversation_context')
    .select('history')
    .eq('session_id', sessionId)
    .single();

  const history = existing?.history || [];
  history.push({ role: 'user', content: userMessage });
  history.push({ role: 'assistant', content: assistantResponse });

  // Upsert conversation
  await supabase.from('conversation_context').upsert({
    session_id: sessionId,
    interface: 'chatbot',
    site: 'act-farm',
    history,
    updated_at: new Date().toISOString(),
  });
}
