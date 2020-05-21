files = ['beerData.txt','brandyData.txt','ginData.txt','liqueurData.txt','rumData.txt','tequilaData.txt','vodkaData.txt','whiskeyData.txt']

for f in files:
    opened = open(f, 'a', encoding = 'utf-8')
    updated = open('new' + f, 'w')
    for line in opened:
        if ', 0.0' not in line:
            updated.write(line)

    opened.close()
    updated.close()        