const request = require('request');

const forecast = (latitude,longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=882e93361587fcc696d522f691e5e862&query='+ latitude+','+longitude;

//Object Shorthand property
request({ url, json: true }, (error, { body }) => { 
   
    if(error){
        console.log('Unable to connect to weather service');
    } else if(body.error){
        console.log('Unable to find location');
    }
    else{
        callback(undefined, body.current.temperature);
    }
})
}

module.exports = forecast;