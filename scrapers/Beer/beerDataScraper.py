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
    if concentration == "0.0":
        continue
    kind = infoObj['props']['catalogItem']['category_names'][-1]
    try:
        ibu = infoObj['props']['catalogItem']['ibu']
    except Exception as e:
        ibu = "IBUNotFound"
    brand = infoObj['props']['catalogItem']['brand_name']
    price_range = infoObj['props']['catalogItem']['price_range']
    origin = "{"
    try:
        originObjs = infoObj['props']['catalogItem']['region_path']
        if len(originObjs) == 1:
            origin += originObjs[0][name]
        else:    
            for i in range(len(originObjs)):
                if (i == len(originObjs) - 1):
                    origin += originObjs[i]['name'] + "}"
                else:    
                    origin += originObjs[i]['name'] + ", "
    except Exception as e:
        origin = "OriginNotFound"                
        
    try:
        calories = infoObj['props']['catalogItem']['flexible_attributes']['beer_calories_per_serving']
    except Exception as e:
        calories = "CaloriesNotFound"

    try:
        carbohydrates = infoObj['props']['catalogItem']['flexible_attributes']['beer_carbs_per_serving']
    except Exception as e:              
        carbohydrates = "CarbohydratesNotFound"                

    output = name + " , " + str(concentration) + " , " + str(kind) + " , " + str(brand) + " , " + str(price_range) + " , " + str(origin) + " , " + str(ibu) + " , " + str(calories) + " , " + str(carbohydrates) + " \n"

    currentLine += 1
    fData.write(output)
    fData.flush()