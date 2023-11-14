const aboutmodel = require('../models/book.model');
exports.getaboutinfo =(req,res)=>{
    aboutmodel.getabout().then(books=>{
        res.render("about" , {books:books,userdetails:userdetails , verifUser: req.session.userid })
    })
}