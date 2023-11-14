const authmodel = require('../models/auth.model')

exports.getregisterpage = (req,res,next)=>{
    res.render('register',{ verifUser:req.session.userid } )
}

exports.postregisterdata=(req,res,next)=>{
   
    authmodel.registerfunctionmodel(req.body.name , req.body.email,req.body.password).then(()=>{
        res.redirect("/login")
    }).catch((msg)=>{
        console.log(msg)
    })
}

exports.logoutfunction = (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}