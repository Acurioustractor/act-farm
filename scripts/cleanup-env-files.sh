#!/bin/bash
# Cleanup .env files to ACT Ecosystem Standard
# Date: 2026-01-01

cd "/Users/benknight/Code/act-farm"

echo "🔒 ACT Ecosystem .ENV Cleanup - ACT Farm"
echo "=========================================="
echo ""

# Create backups folder
echo "📁 Creating backups folder..."
mkdir -p backups/env-backups

# Move backup files
echo "💾 Moving backup files..."
if [ -f .env.local.backup-20251229-131332 ]; then
  mv .env.local.backup-20251229-131332 backups/env-backups/
  echo "  ✅ Moved .env.local.backup-20251229-131332"
fi

if [ -f .env.local.backup-20251230 ]; then
  mv .env.local.backup-20251230 backups/env-backups/
  echo "  ✅ Moved .env.local.backup-20251230"
fi

# Find and move any other backups
find . -maxdepth 1 -name ".env*.backup*" -exec mv {} backups/env-backups/ \; 2>/dev/null
echo ""

# Remove redundant files
echo "🗑️  Removing redundant .env files..."

if [ -f .env.local.example ]; then
  rm .env.local.example
  echo "  ✅ Removed .env.local.example (redundant with .env.example)"
fi

echo ""

# Check if .env.example exists, create if not
if [ ! -f .env.example ]; then
  echo "📝 Creating .env.example from .env.local..."
  if [ -f .env.local ]; then
    # Create template from .env.local with placeholders
    sed 's/=.*/=your_value_here/' .env.local > .env.example
    echo "  ✅ Created .env.example"
  fi
fi

# Verify required files exist
echo "✔️  Verifying required files..."

if [ ! -f .env.local ]; then
  echo "  ⚠️  WARNING: .env.local not found!"
  if [ -f .env.example ]; then
    echo "  💡 Run: cp .env.example .env.local"
  fi
else
  echo "  ✅ .env.local exists"
fi

if [ ! -f .env.example ]; then
  echo "  ⚠️  WARNING: .env.example not found!"
else
  echo "  ✅ .env.example exists"
fi

if [ -f .env.schema.json ]; then
  echo "  ✅ .env.schema.json exists"
else
  echo "  💡 Consider creating .env.schema.json for validation"
fi

echo ""

# Check .gitignore
echo "📝 Verifying .gitignore..."

if grep -q "^\.env\.local$" .gitignore 2>/dev/null; then
  echo "  ✅ .env.local is gitignored"
else
  echo "  ⚠️  Adding .env.local to .gitignore"
  echo ".env.local" >> .gitignore
fi

if grep -q "^!\.env\.example$" .gitignore 2>/dev/null; then
  echo "  ✅ .env.example is allowed"
else
  echo "  💡 Consider adding: !.env.example"
fi

echo ""

# Final count
echo "📊 Final .env file count:"
find . -maxdepth 1 -name ".env*" -type f | wc -l | xargs echo "  Active .env files:"
echo ""

echo "✨ Cleanup complete!"
echo ""
echo "STANDARD STRUCTURE:"
echo "  .env.local       (gitignored, your secrets)"
echo "  .env.example     (committed, template)"
echo "  .env.schema.json (committed, validation - optional)"
echo ""
echo "BACKUPS MOVED TO:"
echo "  backups/env-backups/"
echo ""
