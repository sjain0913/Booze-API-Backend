import json

files = ['beerData.txt','brandyData.txt','ginData.txt','liqueurData.txt','rumData.txt','tequilaData.txt','vodkaData.txt','whiskeyData.txt']
fileNames = ['beerData','brandyData','ginData','liqueurData','rumData','tequilaData','vodkaData','whiskeyData']
time = 0
for f in range(len(files)):
    filename = files[f]
    out = open(fileNames[f] + ".json", 'a', encoding='utf-8')
    out.write('[')
    with open(filename, encoding='utf-8') as fh:
        for line in fh:
            nameVals = line.split(',')
            name = nameVals[0].strip()
            concentration = nameVals[1].strip() + "%"
            dict1 = {"name": name, "concentration": concentration}                
            json.dump(dict1, out)
            out.write(',')
    out.write(']')
    out.close()
    fh.close()