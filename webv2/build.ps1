# get master content.
$index = Get-Content index.html | Out-String

$master_nav = "new nav"
$master_footer = "new footer"
$master_common_header = "new header"

$master_nav = [regex]::Match($index,'(?m)<nav(.|\n|\r)*?</nav>').groups[0].value
$master_footer = [regex]::Match($index,'(?m)<footer(.|\n|\r)*?</footer>').groups[0].value
$master_common_header = [regex]::Match($index,'(?m)<commonheader(.|\n|\r)*?</commonheader>').groups[0].value

Write-Host "have master data"

# for each other file
$dir = get-childitem "."
$list = $dir | where {$_.extension -eq ".html"} 

foreach ($y in $List)
{
	if($y.Name -ne "index.html") 
	{
		# update content from master
		$content = Get-Content $y.Name | Out-String
		$content = $content -replace '(?m)<commonheader(.|\r|\n)*?</commonheader>', $master_common_header | Out-String
		$content = $content -replace '(?m)<nav(.|\r|\n)*?</nav>', $master_nav | Out-String
		$content -replace '(?m)<footer(.|\r|\n)*?</footer>', $master_footer | Out-File $y.Name -Encoding UTF8
		Write-Host $y
	}
}


