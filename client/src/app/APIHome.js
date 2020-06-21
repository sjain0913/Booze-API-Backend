import React, { Component } from 'react';
import './styles/APIHome.css';

class APIHome extends Component {
    render() {
        return (
            <div className = "home">
                <div className = "center">
                    <hr></hr>
                    <br></br>
                    <h1>Overview</h1>
                    <p>The Booze API is a simple REST API which provides info for products of <b>Beer</b>, <b>Brandy</b>, <b>Gin</b>, <b>Liqueur</b>, <b>Rum</b>, <b>Tequila</b>, <b>Vodka</b> and <b>Whiskey</b> sold in the United States.</p>
                    <br></br>
                    <p>The API returns the following data:</p>
                    <p><ul>
                        <li>Name: Name of product</li>
                        <li>Concentration (ABV): An alcohol by volume percentage of product</li>
                        <li>Kind: Type of the selected product</li>
                        <li>Maker: Producer of product</li>
                        <li>Prices: Price ranges of all sizes of the product </li>
                        <li>City: City where product is made</li>
                        <li>Region: Region where product is made</li>
                        <li>Country: Country where product is made</li>
                        <li>Continent: Continent where product is made</li>
                        <li>IBU (Only for Beer): International Bitterness Units measure for beer</li>
                        <li>Calories (Only for Beer): Calories per serving</li>
                        <li>Carbohydrates (Only for Beer): Carbohydrates per serving</li>
                    </ul></p>
                    <p>This data can be returned as either <b>JSON</b> or <b>plain-text (.txt)</b>.</p>
                </div>
            </div>
        )
    }
}

export default APIHome;