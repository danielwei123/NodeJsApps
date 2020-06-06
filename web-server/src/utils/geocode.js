const request = require('request')

const geocode = (address, cb) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmFsbGluYmx1ZSIsImEiOiJja2IyejF6Z2swOHRkMnJwaDF0cmlwOHpkIn0.qu7dVvDy6mgoskAjSKnN4w&limit=1'

    request({ url, json:true }, (error, { body }) =>{
        if (error){
            cb('Unable to connect to the location service!', undefined)
        } else if (body.features.length === 0) {
            cb('Unable to find entered location. Try another one', undefined)
        } else {
            cb(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode