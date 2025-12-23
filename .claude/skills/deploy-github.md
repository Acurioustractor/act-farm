# Deploy to GitHub Skill

## Description
Deploy the ACT Farm website to GitHub repository with proper commit messages and branch management.

## When to Use
- Initial deployment to GitHub
- Pushing updates after content changes
- Creating new branches for features
- Syncing local changes to remote

## Prerequisites
- Git installed and configured
- GitHub account with repository access
- SSH keys or GitHub token configured

## Workflow

### 1. Check Git Status
```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"
git status
```

### 2. Review Changes
```bash
git diff
git diff --staged
```

### 3. Stage Changes
```bash
# Stage all changes
git add .

# Or stage specific files
git add app/ components/ lib/ public/
```

### 4. Commit with Descriptive Message
```bash
git commit -m "feat: add interactive drone map feature

- Implement clickable location pins on drone photo
- Add 8 sample locations (June's Patch, residencies, habitat zones)
- Create admin tool for pin positioning
- Add responsive sidebar with rich location details
- Support 4 map layers (current, before, site plan, habitat)

Based on PICC Station pattern"
```

### 5. Push to GitHub
```bash
# First time (if repository doesn't exist yet)
gh repo create act-farm --public --source=. --remote=origin --push

# Subsequent pushes
git push origin main

# Or push new branch
git checkout -b feature/map-enhancements
git push -u origin feature/map-enhancements
```

## Commit Message Format

Use conventional commits format:

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add interactive map with drone photo
fix: correct pin positioning on mobile devices
docs: update MAP_SETUP_GUIDE with troubleshooting
style: format code with prettier
refactor: extract location card into reusable component
chore: update dependencies to latest versions
```

## Branch Strategy

**Main Branch (`main`):**
- Production-ready code
- Always deployable
- Protected, requires review

**Feature Branches:**
- `feature/map-layer-switching`
- `feature/photo-gallery`
- `feature/ghl-integration`

**Fix Branches:**
- `fix/mobile-sidebar-overflow`
- `fix/image-loading-error`

**Workflow:**
```bash
# Create feature branch
git checkout -b feature/new-feature
git add .
git commit -m "feat: implement new feature"
git push -u origin feature/new-feature

# Merge via pull request on GitHub
# Then sync main
git checkout main
git pull origin main
```

## Git Ignore

Ensure `.gitignore` includes:
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Emergency Rollback

If you need to revert a commit:
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a specific commit (creates new commit)
git revert <commit-hash>
```

## Best Practices

1. **Commit Often**: Small, focused commits
2. **Descriptive Messages**: Clear "what" and "why"
3. **Review Before Push**: Check `git diff` and `git status`
4. **Pull Before Push**: Avoid conflicts with `git pull`
5. **Branch for Features**: Don't commit directly to main
6. **Tag Releases**: Use semantic versioning (`v1.0.0`, `v1.1.0`)

## Tagging Releases

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0 - Initial ACT Farm site with interactive map"
git push origin v1.0.0

# List tags
git tag -l

# Delete tag (if needed)
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

## GitHub CLI Commands

```bash
# Create repository
gh repo create act-farm --public --description "A Curious Tractor Farm website with interactive map"

# Create pull request
gh pr create --title "Add interactive map feature" --body "Implements drone photo map with clickable pins"

# View pull requests
gh pr list

# Merge pull request
gh pr merge 123 --squash

# View repository
gh repo view --web
```

## Troubleshooting

**Problem**: "remote: Permission denied"
**Solution**: Check SSH keys or use HTTPS with token

**Problem**: Merge conflicts
**Solution**:
```bash
git status  # See conflicted files
# Edit files to resolve conflicts
git add .
git commit -m "fix: resolve merge conflicts"
```

**Problem**: Need to change last commit message
**Solution**:
```bash
git commit --amend -m "New commit message"
git push --force-with-lease origin main
```

## Automation

Create a deploy script:
```bash
#!/bin/bash
# deploy.sh

echo "🚀 Deploying ACT Farm to GitHub..."

# Build first to check for errors
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"

    git add .
    echo "📝 Enter commit message:"
    read commit_msg

    git commit -m "$commit_msg"
    git push origin main

    echo "✅ Deployed to GitHub!"
else
    echo "❌ Build failed. Fix errors before deploying."
    exit 1
fi
```

Make executable:
```bash
chmod +x deploy.sh
```

Use:
```bash
./deploy.sh
```
