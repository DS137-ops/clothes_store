const authmodel = require('../models/auth.model')

exports.getloginpage = (req,res,next)=>{
    res.render("login" , { verifUser:req.session.userid } )
}
exports.postlogindata=(req,res,next)=>{
   
    // authmodel.loginfunctionmodel( req.body.email,req.body.password).then((id)=>{
      
    //     req.session.userid=id
    // }).then(user=>{
    //     res.redirect("/",{user:user})
    // }).catch((err)=>{
    //     console.log(err)
    // })
    authmodel.loginfunctionmodel(req.body.email,req.body.password).then((id)=>{
        req.session.userid=id
        res.redirect("/")
    }).catch((err)=>{
        console.log(err)
    })
}

exports.logoutfunction=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}

exports.getcontactpage = (req,res,next)=>{
    authmodel.getbooksdetails().then(userdetails=>{
        res.render("contact" , {userdetails:userdetails,verifUser:req.session.userid})

    })
}