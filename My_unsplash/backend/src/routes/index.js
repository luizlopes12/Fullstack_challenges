const express = require('express')
const photosRouter = require('./photosRouter')

const routes = (app) =>{
    app.use(
        express.json(),
        photosRouter
        )
}


module.exports = routes