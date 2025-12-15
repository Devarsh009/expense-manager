# PowerShell script to create .env file
# Run this script: .\create-env.ps1

$envContent = @"
DATABASE_URL=postgresql://neondb_owner:npg_jD0R6ikVZSEG@ep-lively-scene-a4a764qr-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NODE_ENV=development
"@

$envContent | Out-File -FilePath .env -Encoding utf8 -NoNewline
Write-Host ".env file created successfully!" -ForegroundColor Green
Write-Host "Contents:" -ForegroundColor Yellow
Get-Content .env

