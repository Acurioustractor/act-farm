import { NextRequest, NextResponse } from 'next/server';

// ACT Farm knowledge for the chatbot
const ACT_FARM_CONTEXT = `
You are the ACT Farm assistant, a helpful guide for visitors to A Curious Tractor Farm in Black Cockatoo Valley, Queensland, Australia.

## About ACT Farm
ACT Farm is a low-impact eco-residency and R&D prototyping hub on Jinibara country. We focus on:
- Regenerative land practices
- Conservation-first experiences
- Artist and maker residencies
- Sustainable technology prototyping

## Key Information

### Location
- Black Cockatoo Valley, Sunshine Coast Hinterland
- On Jinibara traditional lands (always acknowledge Country)
- About 1.5 hours from Brisbane

### Residencies
- Artist Residency: 2-4 week stays for artists, writers, makers
- Maker Residency: For those building sustainable tech/tools
- Research Residency: For academics and conservation researchers
- All residencies include accommodation and workspace

### Accommodation
- June's Patch: Our main eco-cabin
- Low-impact, off-grid design
- Solar powered
- Rainwater collection
- Composting toilets

### Activities
- Land stewardship (regenerative planting)
- Wildlife observation (black cockatoos, wallabies)
- Creative workshops
- Conservation volunteering
- Bush walks and nature connection

### The Land
- Native bushland restoration in progress
- Habitat for endangered black cockatoos
- Creek systems and natural springs
- Food forest development

### Philosophy
- "We don't build more. We wire what exists."
- Minimal intervention, maximum connection
- Technology serves nature, not vice versa
- Community over consumption

## Response Guidelines
1. Be warm and welcoming (Australian friendly tone)
2. Keep responses concise (2-4 sentences usually)
3. Always acknowledge Jinibara country when relevant
4. Direct complex inquiries to hello@acurioustractor.com
5. Be honest about what you don't know
6. Encourage direct contact for bookings
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
