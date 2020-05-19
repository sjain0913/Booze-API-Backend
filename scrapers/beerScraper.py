from bs4 import BeautifulSoup
import cloudscraper
import json

# headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
#             "referer": "https://drizly.com/beer/ale/ipa/c15",
#             "authority": "products2.imgix.drizly.com"
# :method: GET
# :path: /ci-goose-island-ipa-557963b1d27f38ac.jpeg?auto=format%2Ccompress&dpr=2&fm=jpg&h=240&q=20
# :scheme: https
# accept: image/webp,image/apng,image/*,*/*;q=0.8
# accept-encoding: gzip, deflate, br
# accept-language: en-US,en-IN;q=0.9,en;q=0.8
# cookie: __cfduid=d0e4ef4d23b9d2272c30b9cd3cbe2b7281589722731; _gcl_au=1.1.1253147988.1589722735; _ga=GA1.2.1917138143.1589722735; _gid=GA1.2.1317855705.1589722735; ftr_ncd=6; _fbp=fb.1.1589722737810.558687936; scarab.visitor=%22768A5460A953CA09%22; __utma=75509312.1917138143.1589722735.1589722989.1589722989.1; __utmz=75509312.1589722989.1.1.utmcsr=rapidapi.com|utmccn=(referral)|utmcmd=referral|utmcct=/blog/directory/drizly/; _scid=e8c37569-0e46-4ca7-8684-c13807afa1bd; _sctr=1|1589740200000; IR_gbd=drizly.com; ftr_blst_1h=1589898108885; IR_PI=c2ddfc11-9843-11ea-9e5a-42010a246305%7C1589984508636; _uetsid=54b702bc-561e-1302-9078-a029e21b9d5c; IR_9425=1589899143008%7Cc-19116%7C1589898108636%7C%7C; forterToken=f5b3996f7e764c87a0a0e8b8228b198e_1589899220962__UDF43_6
# referer: https://drizly.com/beer/ale/ipa/c15
# sec-ch-ua: "Google Chrome 81"
# sec-fetch-dest: image
# sec-fetch-mode: no-cors
# sec-fetch-site: same-site
# user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36
# }
# r = requests.get("https://drizly.com/beer/ale/ipa/c15")
# soup = BeautifulSoup(r.content, 'lxml')
# print(soup)

scraper = cloudscraper.create_scraper()  # returns a CloudflareScraper instance
x = scraper.get("https://drizly.com/beer/ale/ipa/c15")
print(type(x))

soup = BeautifulSoup(x.content, 'html.parser')
print(soup)
for i in soup.find_all('div', attrs={'data-integration-name':'react-component'}):
    info = json.loads(i.get('data-payload'))
    print(info)
