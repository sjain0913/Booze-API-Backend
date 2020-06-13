from bs4 import BeautifulSoup
import cloudscraper
import json

scraper = cloudscraper.create_scraper()

for pageNumber in range(1,175):
    f = open('whiskeyURL.txt', 'a')
    print("Working on Page " + str(pageNumber) + " !")
    if pageNumber == 1:
        page = scraper.get("https://drizly.com/liquor/whiskey/c196923")
    else:
        page = scraper.get("https://drizly.com/liquor/whiskey/c196923/" + "page" + str(pageNumber))
    soup = BeautifulSoup(page.content, 'html.parser')
    occurences = soup.find_all('div', attrs={'data-integration-name':'react-component'})
    for occurence in range(len(occurences)):
        if (occurence == 0 or occurence == 2):
            continue
        else:
            infoObj = json.loads(occurences[occurence].get('data-payload'))
            infoFormatted = json.dumps(infoObj['props']['catalogItems'], indent = 2)
            catalog = infoObj['props']['catalogItems']
            # f.write(infoFormatted)
            for item in range(24):
                try:
                    URLSnippet = eachItem = catalog[item]['catalogItem']['clickUrl']
                    URL = "https://drizly.com" + URLSnippet
                    f.write(URL + "\n")
                except Exception as e:
                    continue
    f.flush()

