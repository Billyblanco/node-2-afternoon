const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

let controller = require('./controller/controller')

const app = express()
app.use(bodyParser.json())
console.log(controller)
app.get('/api/products', controller.getAll)
app.get('/api/product/:id', controller.getOne)
app.put('/api/product/:id', controller.update)
app.post('/api/product', controller.create)
app.delete('/api/product/:id', controller.delete)


massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(err => { console.log('ERROR CONNECTING TO DATABASE:', err)});


const port = 3000
app.listen(port, () => { console.log("HELLO OPERATOR, CAN YOU GIVE ME NUMBER:", port)})

