# One-time: log in GitHub CLI as domdev07 and switch active account.
# Run in PowerShell from journey-iceland folder:
#   .\scripts\finish-gh-domdev07.ps1

Write-Host "Logging in to GitHub as domdev07 (browser will open)..." -ForegroundColor Cyan
gh auth login --hostname github.com --git-protocol https --web --skip-ssh-key

Write-Host "Switching active account to domdev07..." -ForegroundColor Cyan
gh auth switch --user domdev07

Write-Host ""
gh auth status
Write-Host ""
Write-Host "Git identity for this repo:" -ForegroundColor Green
git config --local user.name
git config --local user.email
Write-Host ""
Write-Host "Done. Future commits and pushes here will use domdev07." -ForegroundColor Green
