# Booooze-API
Through the Booooze API, you can access the following data for every product of Beer, Brandy, Gin, Liqueur, Rum, Tequila, Vodka and Whiskey sold in the United States:
- **Name**: Name of product
- **Concentration (ABV)**: An alcohol by volume percentage of product
- **Kind**: Type of the selected product
- **Maker**: Producer of product
- **Prices**: Price ranges of all sizes of the product 
- **City**: City where product is made
- **Region**: Region where product is made
- **Country**: Country where product is made
- **Continent**: Continent where product is made
- **IBU** (Only for Beer): International Bitterness Units measure for beer
- **Calories** (Only for Beer): Calories per serving
- **Carbohydrates** (Only for Beer): Carbohydrates per serving

## Technologies Used
#### Backend
- Server with `Node.js (Express, Mongoose, Router, body-parser, cors)`
- Data scraped through `Python (Beautiful Soup, JSON, Pickle, CloudScraper)`
- Data stored in `MongoDB` database
- Data transmission through `Postman`

#### Frontend (Coming Soon)
- Interface through `React.js`

## Access Points
- **GET**: Through ObjectID, Name, or list of all objects in collection
- **POST**: Through specified parameters or entire JSON of objects
- **DELETE**: Through ObjectID
- **PATCH**: Through ObjectID

## Demo
!{API Demo](demo/apidemo.gif)
