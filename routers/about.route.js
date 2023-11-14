

const aboutcontroller = require("../controllers/about.controller");
const router = require("express").Router();

router.use('/' , aboutcontroller.getaboutinfo);

module.exports = router ;