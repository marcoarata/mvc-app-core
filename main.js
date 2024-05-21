// Config MongoDB
import './db.config.js'

// Config Framework Web
import express from 'express'
const app = express()

// Config Cors
import cors from 'cors'
app.use( cors() )

// Config HTTP Logger Request
import morgan from 'morgan'
app.use( morgan('tiny') )

// Config Assets Folder Public
app.use(express.static('assets'))

// Config Template Engine
app.set('view engine', 'pug')
app.set('views', 'views')

// Config Form Data & Params -> Object JavaScript
import bodyParser from 'body-parser'
app.use( bodyParser.urlencoded( { extended: true } ) )

// Config Recognizes PUT, PATCH and DELETE method
import methodOverride from 'method-override'
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

// Config Routes Collection (RUTAS)
import routes_home from './routes/home_routes.js'
import routes_customer from './routes/customer_routes.js'

app.use('/', routes_home) // Config Routes Resource
app.use('/customer', routes_customer)

// Config Start Server
app.listen( process.env.PORT, () => {
    if ( process.env.NODE_ENV === 'development' ) {
        console.log(`${process.env.NODE_ENV} mode enabled`)
        console.log(`backend port: ${process.env.PORT} - frontend port: ${process.env.PORT_UI}`)
    }
    if ( process.env.NODE_ENV === 'production' ) {
        console.log(`${process.env.NODE_ENV} mode enabled`)
        console.log(`backend port: ${process.env.PORT}`)
    }
})