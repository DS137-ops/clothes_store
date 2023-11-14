const homecontroller = require("../controllers/home.controller")

const router = require("express").Router();
// router.use('/details' , bookcontroller.detailsproduct);

router.use('/' , homecontroller.homeThreeController);

module.exports = router ;