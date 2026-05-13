#!/usr/bin/env bash
# Convenience: commit any changes and push.
# Usage: ./deploy.sh "your commit message"
# (If no message is given, one is auto-generated.)
set -euo pipefail

MSG="${1:-Update portfolio}"

git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit."
else
  git commit -m "$MSG"
fi

git push -u origin main
echo ""
echo "✓ Pushed. GitHub Actions will build and deploy to https://ayushk01.github.io in ~2 minutes."
echo "  Watch progress: https://github.com/ayushk01/ayushk01.github.io/actions"
