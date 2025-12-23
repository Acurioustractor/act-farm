#!/bin/bash
# ACT Farm - Site Monitoring Script
# Automated health checks using CLI tools

set -e

echo "🔍 ACT Farm Site Monitor"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Get production URL from Vercel
step() {
    echo -e "${BLUE}▶ $1${NC}"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Get Vercel production URL
step "Getting production URL..."
PROD_URL=$(vercel ls --prod 2>/dev/null | grep -o 'https://[^ ]*' | head -1)

if [ -z "$PROD_URL" ]; then
    error "No production deployment found. Deploy first with: ./scripts/deploy.sh"
    exit 1
fi

echo "Monitoring: $PROD_URL"
echo ""

# Critical pages to check
PAGES=(
    "/"
    "/map"
    "/about"
    "/activities"
    "/residencies"
    "/connect"
    "/junes-patch"
)

# 1. Check homepage
step "Checking homepage..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$PROD_URL")
TIME=$(curl -s -o /dev/null -w "%{time_total}" "$PROD_URL")

if [ "$RESPONSE" -eq 200 ]; then
    success "Homepage: OK (${TIME}s response time)"
else
    error "Homepage: FAILED (HTTP $RESPONSE)"
fi

echo ""

# 2. Check all critical pages
step "Checking all pages..."
FAILED_PAGES=()

for page in "${PAGES[@]}"; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${PROD_URL}${page}")
    if [ "$STATUS" -eq 200 ]; then
        echo -e "  ${GREEN}✓${NC} ${page}"
    else
        echo -e "  ${RED}✗${NC} ${page} (HTTP $STATUS)"
        FAILED_PAGES+=("$page")
    fi
done

echo ""

# 3. Check drone photo
step "Checking map assets..."
IMAGE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${PROD_URL}/images/map/drone-current.jpg")
if [ "$IMAGE_STATUS" -eq 200 ]; then
    success "Drone photo: OK"
else
    error "Drone photo: FAILED (HTTP $IMAGE_STATUS)"
fi

echo ""

# 4. Check recent deployments
step "Recent deployments..."
vercel ls --prod | head -5

echo ""

# 5. Check for errors in logs (last hour)
step "Checking recent logs for errors..."
LOG_ERRORS=$(vercel logs --prod --since 1h 2>/dev/null | grep -i "error" | wc -l | tr -d ' ')

if [ "$LOG_ERRORS" -gt 0 ]; then
    warning "$LOG_ERRORS errors found in last hour"
    echo "   Run 'vercel logs --prod --since 1h' to view details"
else
    success "No errors in last hour"
fi

echo ""

# 6. Run Lighthouse (if installed)
if command -v lighthouse &> /dev/null; then
    read -p "Run Lighthouse audit? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        step "Running Lighthouse audit..."
        lighthouse "$PROD_URL" --only-categories=performance,accessibility --quiet --chrome-flags="--headless" 2>/dev/null || warning "Lighthouse audit failed"
    fi
fi

echo ""
echo "================================"

# Summary
if [ ${#FAILED_PAGES[@]} -eq 0 ] && [ "$RESPONSE" -eq 200 ] && [ "$IMAGE_STATUS" -eq 200 ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
else
    echo -e "${YELLOW}⚠️  Some checks failed${NC}"
    if [ ${#FAILED_PAGES[@]} -gt 0 ]; then
        echo "Failed pages: ${FAILED_PAGES[*]}"
    fi
fi

echo ""
echo "Site: $PROD_URL"
echo "Dashboard: https://vercel.com/dashboard"
echo ""
