import json
#'beerData.txt','brandyData.txt','ginData.txt','liqueurData.txt','rumData.txt','tequilaData.txt','vodkaData.txt'
#'beerData','brandyData','ginData','liqueurData','rumData','tequilaData','vodkaData'
files = ['brandyData.txt']
fileNames = ['brandyData']
time = 0
for f in range(len(files)):
    filename = files[f]
    out = open(fileNames[f] + ".json", 'a', encoding='utf-8')
    out.write('[')
    with open(filename, encoding='utf-8') as fh:
        for line in fh:
            regionSplit = line.split('{')
            if "Liqueur, Cordials, & Schnapps" in line:
                line.replace("Liqueur, Cordials, & Schnapps", "")
            vals = regionSplit[0].split(',')
            name = vals[0].strip()
            concentration = vals[1].strip() + "%"
            kind = vals[2].strip()
            if kind == "":
                kind = "Liqueur, Cordials, & Schnapps"
            maker = vals[3].strip()
            if maker == "":
                maker = "Not Defined"
            prices = vals[4].strip()
            if prices == "":
                prices = "Not Defined"
            regions = regionSplit[1].split(',')
            if len(regions) == 0:
                region = "Not Defined"
                country = "Not Defined"
                continent = "Not Defined"
                city = "Not Defined"
            if len(regions) == 1:
                region = "Not Defined"
                country = "Not Defined"
                continent = "Not Defined"
                city = "Not Defined"
            if len(regions) == 2:
                region = "Not Defined"
                country = regions[0].strip()
                continent = regions[1].strip()[:-1]
                city = "Not Defined"
            if len(regions) == 3:
                region = regions[0].strip()
                country = regions[2].strip()[:-1]
                continent = regions[1].strip()
                city = "Not Defined"
            if len(regions) == 4:
                region = regions[0].strip()
                country = regions[2].strip()
                continent = regions[1].strip()
                city = regions[3].strip()[:-1]

            dict1 = {"name": name, "concentration": concentration, "kind": kind, "maker": maker, "prices": prices, "city": city, "region": region, "country": country, "continent": continent}                
            json.dump(dict1, out)
            out.write(',')
    out.write(']')
    out.close()
    fh.close()