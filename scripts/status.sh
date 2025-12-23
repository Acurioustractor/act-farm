#!/bin/bash
# Quick status check for ACT Farm project

echo "📊 ACT Farm Project Status"
echo "================================"
echo ""

# Project info
echo "📁 Project: A Curious Tractor Farm"
echo "📍 Location: $(pwd)"
echo ""

# Git status
echo "🔀 Git Status:"
git status --short --branch
echo ""

# GitHub repo
echo "🐙 GitHub:"
gh repo view --json url,name,description -q '"   URL: " + .url, "   Name: " + .name, "   Description: " + .description' 2>/dev/null || echo "   Not connected to GitHub"
echo ""

# Vercel deployments
echo "☁️  Vercel Deployments:"
if command -v vercel &> /dev/null; then
    vercel ls 2>/dev/null | head -6 || echo "   No deployments found"
else
    echo "   Vercel CLI not installed"
fi
echo ""

# Build status
echo "🏗️  Build Status:"
if [ -d ".next" ]; then
    echo "   ✅ Last build: $(stat -f "%Sm" -t "%Y-%m-%d %H:%M" .next 2>/dev/null || echo "unknown")"
else
    echo "   ⚠️  No build found. Run: npm run build"
fi
echo ""

# Dependencies
echo "📦 Dependencies:"
if [ -d "node_modules" ]; then
    echo "   ✅ Installed"
else
    echo "   ⚠️  Not installed. Run: npm install"
fi
echo ""

# Available scripts
echo "🛠️  Available Commands:"
echo "   npm run dev          - Start development server"
echo "   npm run build        - Build for production"
echo "   ./scripts/deploy.sh  - Deploy to GitHub + Vercel"
echo "   ./scripts/monitor.sh - Check site health"
echo ""
