#!/bin/bash
# ACT Farm - Automated Deployment Script
# Uses GitHub CLI and Vercel CLI for full automation

set -e  # Exit on error

echo "🚀 ACT Farm Deployment Script"
echo "================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Not in project directory${NC}"
    exit 1
fi

# Function to print step
step() {
    echo -e "${YELLOW}▶ $1${NC}"
}

# Function to print success
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Function to print error
error() {
    echo -e "${RED}❌ $1${NC}"
}

# 1. Build the project
step "Building project..."
if npm run build; then
    success "Build successful"
else
    error "Build failed. Fix errors before deploying."
    exit 1
fi

# 2. Check Git status
step "Checking Git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "Uncommitted changes found:"
    git status --short

    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "Enter commit message: " commit_msg
        git commit -m "$commit_msg

🤖 Generated with Claude Code
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
        success "Changes committed"
    fi
fi

# 3. Push to GitHub
step "Pushing to GitHub..."
if git push origin main; then
    success "Pushed to GitHub"
    GITHUB_URL=$(gh repo view --json url -q .url)
    echo "   Repository: $GITHUB_URL"
else
    error "Failed to push to GitHub"
    exit 1
fi

# 4. Deploy to Vercel
step "Deploying to Vercel..."
echo "Choose deployment target:"
echo "  1) Preview (for testing)"
echo "  2) Production (live site)"
read -p "Enter choice (1 or 2): " deploy_choice

if [ "$deploy_choice" = "2" ]; then
    # Production deployment
    step "Deploying to production..."
    DEPLOY_OUTPUT=$(vercel --prod --yes 2>&1)

    if [ $? -eq 0 ]; then
        success "Deployed to production!"

        # Extract URL from output
        PROD_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*' | head -1)

        echo ""
        echo "================================"
        echo -e "${GREEN}🎉 Deployment Complete!${NC}"
        echo "================================"
        echo ""
        echo "Production URL: $PROD_URL"
        echo "GitHub: $GITHUB_URL"
        echo ""

        # Open in browser
        read -p "Open site in browser? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            open "$PROD_URL"
        fi
    else
        error "Production deployment failed"
        echo "$DEPLOY_OUTPUT"
        exit 1
    fi
else
    # Preview deployment
    step "Deploying preview..."
    DEPLOY_OUTPUT=$(vercel --yes 2>&1)

    if [ $? -eq 0 ]; then
        success "Preview deployed!"

        # Extract URL from output
        PREVIEW_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*' | head -1)

        echo ""
        echo "================================"
        echo -e "${GREEN}🎉 Preview Deployment Complete!${NC}"
        echo "================================"
        echo ""
        echo "Preview URL: $PREVIEW_URL"
        echo ""
        echo "To promote to production, run:"
        echo "  vercel --prod"
        echo ""

        # Open in browser
        read -p "Open preview in browser? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            open "$PREVIEW_URL"
        fi
    else
        error "Preview deployment failed"
        echo "$DEPLOY_OUTPUT"
        exit 1
    fi
fi

echo ""
success "Deployment script complete!"
