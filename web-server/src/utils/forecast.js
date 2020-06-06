const request = require('request')

const forecast = (latitude, longitude, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=ff681437843518256f5c5da6021fa4e8&query=' + latitude + ',' + longitude

    request({ url, json:true}, (error, { body }) => {
        if (error){
            cb('Unable to connect to weather service', undefined)
        } else if (body.error) {
            cb('Unable to find location', undefined)
        } else {
            cb(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degree out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast