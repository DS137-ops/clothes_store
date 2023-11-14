const route = require('express').Router()
const loginController = require('../controllers/login.controller')
const body = require('express').urlencoded({extended:true})
route.get('/login' , loginController.getloginpage)
route.post('/login' ,body, loginController.postlogindata)
route.get('/contact' , loginController.getcontactpage)

module.exports = route
