const express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes')
    ,cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

module.exports = app