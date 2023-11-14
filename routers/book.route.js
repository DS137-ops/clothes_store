
const bookcontroller = require("../controllers/book.controller")

const router = require("express").Router();


router.use('/' , bookcontroller.bookAllController);

//router.use('/:id' , bookcontroller.getOneBookdetailsController);


module.exports = router ;