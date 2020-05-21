from bs4 import BeautifulSoup
import cloudscraper
import json
import pickle

scraper = cloudscraper.create_scraper()
fURL = open('beerURL.txt', 'r')
line = "https://drizly.com/beer/lager/pale-lager/american-style-lager/corona-extra/p2822"
currentLine = 1
for line in fURL:
    output = ""
    fData = open('beerData.txt', 'a')
    print(currentLine)
    page = scraper.get(line.strip())
    soup = BeautifulSoup(page.content, 'html.parser')
    occurences = soup.find_all('div', attrs={'data-integration-name':'react-component'})
    infoObj = json.loads(occurences[1].get('data-payload'))
    infoFormatted = json.dumps(infoObj['props'], indent = 2)

    name = infoObj['props']['catalogItem']['name']
    concentration = infoObj['props']['catalogItem']['abv']
    # kind = infoObj['props']['catalogItem']['category_names'][2]
    # try:
    #     ibu = infoObj['props']['catalogItem']['ibu']
    # except Exception as e:
    #     ibu = "IBUNotFound"
    # try:
    #     origin = infoObj['props']['catalogItem']['region_path'][0]['name']
    # except Exception as e:
    #     origin = "OriginNotFound"

    # try:
    #     calories = infoObj['props']['catalogItem']['flexible_attributes']['beer_calories_per_serving']
    # except Exception as e:
    #     calories = "CaloriesNotFound"

    # try:
    #     carbohydrates = infoObj['props']['catalogItem']['flexible_attributes']['beer_carbs_per_serving']
    # except Exception as e:              
    #     carbohydrates = "CarbohydratesNotFound"
    
    output = name + " , " + str(concentration) + " \n"
    currentLine += 1
    fData.write(output)
    fData.flush()






# output = ""
# fData = open('beerData.txt', 'w')
# page = scraper.get(line)
# soup = BeautifulSoup(page.content, 'html.parser')
# occurences = soup.find_all('div', attrs={'data-integration-name':'react-component'})
# infoObj = json.loads(occurences[1].get('data-payload'))
# infoFormatted = json.dumps(infoObj['props'], indent = 2)

# name = infoObj['props']['catalogItem']['name']
# concentration = infoObj['props']['catalogItem']['abv']
# kind = infoObj['props']['catalogItem']['category_names'][2]
# try:
#     ibu = infoObj['props']['catalogItem']['ibu']
# except Exception as e:
#     ibu = "0"    
# origin = infoObj['props']['catalogItem']['region_path'][0]['name']
# calories = infoObj['props']['catalogItem']['flexible_attributes']['beer_calories_per_serving']
# carbohydrates = infoObj['props']['catalogItem']['flexible_attributes']['beer_carbs_per_serving']
# output = name + " , " + str(concentration) + " , " + kind + " , " + str(ibu) + " , " + origin + " , " + str(calories) + " , " + str(carbohydrates) + " "
# fData.write(output + "\n")
# fData.flush()