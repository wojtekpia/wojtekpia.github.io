# for each html file
$dir = get-childitem "."
$list = $dir | where {$_.extension -eq ".html"} 
$sitemap = "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`r`n"
$sitemap = $sitemap + "<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`r`n"
$sitemap = $sitemap + "	<url><loc>http://www.liveatparkhill.ca/</loc></url>`r`n"

foreach ($y in $List)
{
	if(($y.Name -ne "index.html") -and ($y.Name -ne "404.html") -and ($y.Name -ne "thankyou.html")) 
	{
		# update content from master
		$sitemap = $sitemap + "	<url><loc>http://www.liveatparkhill.ca/" + $y.Name + "</loc></url>`r`n"
	}
}
$sitemap = $sitemap + "</urlset>"

$sitemap | out-file "sitemap.xml"
