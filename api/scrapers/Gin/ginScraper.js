const ginRoute = require('../../routes/gin');
const Gin = require('../../models/Gin');
const fs = require('fs')
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('./scrapers/Beer/beerData.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
        var alcName = line.split(',');
        for (i = 0; i < alcName.length; i++) {
            alcName[i] = alcName[i].trim();
        }
        var concentration = alcName[1] + "%"
        var gin = {"name" : alcName[0], "concentration" : concentration}
        ginObject = new Gin(gin);
        ginObject.save();
    }
}
  
processLineByLine();

