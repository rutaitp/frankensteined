import bs4
import urllib
import time

url = "http://www.imsdb.com/scripts/Frankenstein.html"

html = urllib.urlopen(url).read()

# #creates a special object that is parsing the html
soup = bs4.BeautifulSoup(html, "html.parser")

titles = soup.select('.scrtext')

for title in titles:
	print title.text.strip().encode('ascii', 'ignore')