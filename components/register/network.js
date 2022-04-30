const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');
const path = require('path');

router.post('/', function(req, res){
    controller.addUser(req.body.email, req.body.password)
    .then((data)=>{
        response.succes(req, res, "Usuario Registrado", 200 )
    }).catch((e)=>{
        response.error(req, res, "Internal Error", 500, e)
    })
})

router.get('/getUsers', function(req, res){
    controller.listUsers()
        .then((data)=>{
            response.succes(req, res, data, 200 )
        }).catch((e)=>{
            response.error(req, res, data, 500, e)
        })
})

router.get('/login', function (req, res){
    controller.login( req.query.Email, req.query.password )
    .then((data)=> {
        if(data.email === req.query.Email && data.password === req.query.password){
            res.sendFile(path.resolve(__dirname, '../../public/html/game.html'))
        } else {
            res.send('Email o Contraseña incorrectas')
        }
    }).catch((e)=>{response.error(req,res,'Invalid Error', 500, e)})
    })

module.exports = router;