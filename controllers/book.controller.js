const Bookmodel = require('../models/book.model')
exports.bookAllController = (req,res,next)=>{
    Bookmodel.getAllBooks().then(books=>{
        res.render("books" , {books:books ,verifUser: req.session.userid })
    })
}


// exports.getOneBookdetailsController = (req,res,next)=>{
//     let id =req.params.id;
//     Bookmodel.getOneBookdetails().then(books=>{
//         res.render("details" , {books:books})
//     })
// }

