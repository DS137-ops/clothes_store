const bookmodel = require('../models/book.model');

exports.homeThreeController = (req,res,next)=>{
    bookmodel.homeThreeBooks().then(books=>{
        res.render("index" , {books:books , verifUser: req.session.userid })
    })
}

// exports.detailsproduct = (req,res,next)=>{
//     bookmodel.getalldetails().then(details=>{
//         res.render("details" , {details:details})
//     })
// }