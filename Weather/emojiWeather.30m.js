#!/usr/local/bin/node
/* jshint esversion: 6 */

//# <xbar.title>emojiWeather</xbar.title>
//# <xbar.version>v1.0</xbar.version>
//# <xbar.author>Chandler Davidson</xbar.author>
//# <xbar.author.github>Chandler-Davidson</xbar.author.github>
//# <xbar.desc>Displays weather info as an emoji.</xbar.desc>
//# <xbar.image>https://static1.squarespace.com/static/5818f78ef5e2314f65b76331/t/59ded8e6bce1769ff7340715/1507776754374/emojiWeather?format=1500w</xbar.image>
//# <xbar.dependencies>node/bitbar.dependencies>
//# <xbar.abouturl>https://github.com/Chandler-Davidson/emojiWeather/blob/master/emojiWeather.1h.js</xbar.abouturl>


let request = require('request');

let apiKey = '';    // https://home.openweathermap.org/api_keys
let city = 'Huntsville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

let emojis = [
    ':cry:',        // No connection
    '::',           // 
    ':zap:',        // Thunderstorm
    ':umbrella:',    // Rain
    '::',           // 
    ':cloud:',      // Cloudy
    ':snowflake:',  // Snow
    '::',           // 
    ':sunny:',      // Clear
    ':cyclone:'];    // Extreme

request(url, function (err, response, body) {   // Collect JSON object
    if (err) {  // If no connection, so sad...
        console.log(emojis[0]);
    } else {

        let weather = JSON.parse(body);
        let id = weather.weather[0].id; // Seperate the weather ID
        id = Math.ceil(id / 100);       // Get only the hundreds place (1xx, 2xx)

        console.log(emojis[id]);        // Print the emoji 
    }
});