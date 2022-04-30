const express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = require('./db.js') 
db('###')
app.use('/', express.static('./public'));

const router = require('./network/routes');

router(app)


app.listen(3000,()=>{
    console.log('App escuchando en el puerto 3000 [ http://localhost:3000 ]')
})