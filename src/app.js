const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
<<<<<<< HEAD
        title:'Weather',
=======
        title:' Weather',
>>>>>>> 6dfbbdd79d5555670a1d718a3a2b8d5990833ee2
        name: 'Daniel Wei'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
<<<<<<< HEAD
        title:'About me',
=======
        title:' About me',
>>>>>>> 6dfbbdd79d5555670a1d718a3a2b8d5990833ee2
        name: 'Daniel Wei'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
<<<<<<< HEAD
        title:'Help',
        name:'Daniel Wei',
=======
>>>>>>> 6dfbbdd79d5555670a1d718a3a2b8d5990833ee2
        helpText:'This is some helpful text',
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address. No address is provided.'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Daniel Wei',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Daniel Wei',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000')
<<<<<<< HEAD
})
=======
})
>>>>>>> 6dfbbdd79d5555670a1d718a3a2b8d5990833ee2
