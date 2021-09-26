const express = require('express')
const mongoose = require ('mongoose')
const morgan = require ('morgan')
const bodyParser = require('body-parser')

const path = require('path');


var hbs  = require('express-handlebars');

const CustomerRoute = require("./routes/CustomerRoute")
const AuthRoute = require("./routes/AuthRoute")

const _handlebars = require('handlebars');
//const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


mongoose.connect('mongodb://localhost:27017/Cinema', { useNewUrlParser: true,  useUnifiedTopology: true  }, )
const db = mongoose.connection


db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connected')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.engine('hbs', hbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views',path.join(__dirname,'/views/'))
app.set('view engine','hbs');


const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/customer', CustomerRoute)
app.use('/api', AuthRoute)