# export the react app as an static web page
Write-Host 'exporting react to static web-page to ./dimi/out'
Get-Location
cd dimi
npm run build
npm run format
Get-Location