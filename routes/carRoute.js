const router = require("express").Router();
const { carController } = require("../controllers");

router.get("/cars", carController.getAllCar);

module.exports = router;