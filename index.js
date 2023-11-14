const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const session = require('express-session')
const MongoStrore = require("connect-mongodb-session")(session)
const path = require('path');
app.use(express.static(path.join(__dirname , 'assets')));
app.set('view engine' , 'ejs');
app.set('views' , 'views');

var Store = new MongoStrore({
    uri:"mongodb://localhost:27017/library",
    collection:"sessions"
})
app.use(session({
    secret:"asdkandlk",
    store:Store,
    resave:true,
    saveUninitialized:true
}))

const routerhome = require('./routers/home.route')
const routerbook = require('./routers/book.route')
const routerabout = require('./routers/about.route')
const routeregister = require('./routers/auth.route')
const routelogin = require('./routers/login.route')
const routercontact = require('./routers/login.route')

// app.get('/contact' ,(req,res)=>{
//     res.render('contact');
// })
// app.get('/index' ,(req,res)=>{
//     res.render('index');
// })

// app.get('/details' ,(req,res)=>{
//     res.render('details');
// })

// app.get('/about' , (req,res)=>{
//     res.render("about")
// })


// app.get('/login' , (req,res)=>{
//     res.render("login")
// })

// app.get('/register' , (req,res)=>{
//     res.render("register")
// })

app.use('/about' , routerabout )
app.use('/books' , routerbook )
app.use('/' , routercontact)
app.use('/',routelogin)
app.use('/' , routeregister)
app.use('/' , routerhome)



app.listen(3000 , ()=>{
    console.log("server is running")
})