import json
#'beerData.txt','brandyData.txt','ginData.txt','liqueurData.txt','rumData.txt','tequilaData.txt','vodkaData.txt'
#'beerData','brandyData','ginData','liqueurData','rumData','tequilaData','vodkaData'
files = ['beerData.txt']
fileNames = ['beerData']
time = 0
for f in range(len(files)):
    filename = files[f]
    out = open(fileNames[f] + ".json", 'a', encoding='utf-8')
    out.write('[')
    with open(filename, encoding='utf-8') as fh:
        for line in fh:
            regionSplit = line.split('{')
            vals = regionSplit[0].split(',')
            name = vals[0].strip()
            concentration = vals[1].strip() + "%"
            kind = vals[2].strip()
            maker = vals[3].strip()
            if maker == "":
                maker = "Not Defined"
            prices = vals[4].strip()
            if prices == "":
                prices = "Not Defined"
            # regions = regionSplit[1].split(',')
            if '}' in line:
                regions = regionSplit[1].split('}')
                actualRegions = regions[0].split(',')
                nutrition = regions[1].split(',')
                ibu = nutrition[1].strip()
                calories = nutrition[2].strip()
                carbohydrates = nutrition[3].strip()
                if len(actualRegions) == 0:
                    region = "Not Defined"
                    country = "Not Defined"
                    continent = "Not Defined"
                    city = "Not Defined"
                elif len(actualRegions) == 1:
                    region = "Not Defined"
                    country = "Not Defined"
                    continent = "Not Defined"
                    city = "Not Defined"
                elif len(actualRegions) == 2:
                    region = "Not Defined"
                    country = actualRegions[0].strip()
                    continent = actualRegions[1].strip()
                    city = "Not Defined"
                elif len(actualRegions) == 3:
                    region = actualRegions[0].strip()
                    country = actualRegions[2].strip()
                    continent = actualRegions[1].strip()
                    city = "Not Defined"
                else:
                    region = actualRegions[0].strip()
                    country = actualRegions[2].strip()
                    continent = actualRegions[1].strip()
                    city = actualRegions[3].strip()
            else:
                nutrition = regionSplit[1].split(',')
                ibu = nutrition[1]
                calories = nutrition[2].strip()
                carbohydrates = nutrition[3].strip()
                region = "Not Defined"
                country = "Not Defined"
                continent = "Not Defined"
                city = "Not Defined"

            dict1 = {"name": name, "concentration": concentration, "kind": kind, "maker": maker, "prices": prices, "city": city, "region": region, "country": country, "continent": continent, "IBU": ibu, "calories": calories, "carbohydrates": carbohydrates}                
            json.dump(dict1, out)
            out.write(',')
    out.write(']')
    out.close()
    fh.close()