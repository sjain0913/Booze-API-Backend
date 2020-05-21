from bs4 import BeautifulSoup
import cloudscraper
import json
import pickle

scraper = cloudscraper.create_scraper()
fURL = open('vodkaURL.txt', 'r')
currentLine = 1
for line in fURL:
    output = ""
    fData = open('vodkaData.txt', 'a', encoding="utf-8")
    print(currentLine)
    page = scraper.get(line.strip())
    soup = BeautifulSoup(page.content, 'html.parser')
    occurences = soup.find_all('div', attrs={'data-integration-name':'react-component'})
    infoObj = json.loads(occurences[1].get('data-payload'))
    infoFormatted = json.dumps(infoObj['props'], indent = 2)

    name = infoObj['props']['catalogItem']['name']
    concentration = infoObj['props']['catalogItem']['abv']
    
    output = name + " , " + str(concentration) + " \n"
    currentLine += 1
    fData.write(output)
    fData.flush()