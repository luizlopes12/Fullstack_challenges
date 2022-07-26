const express = require('express')
const routes = require('./routes')
const db = require('./config/database.js')
const app = express()
const port = 3001
app.use(express.json())
routes(app)
app.listen(port, () =>{
    console.log(`Servidor rodando porta: ${port}`)
})