const router = require('express').Router()
const AuthController = require('../controllers/auth.controller')
const body = require('express').urlencoded({extended:true})
router.get('/register' , AuthController.getregisterpage)
router.post('/register' ,body, AuthController.postregisterdata)

router.post('/logout' , AuthController.logoutfunction)
module.exports=router