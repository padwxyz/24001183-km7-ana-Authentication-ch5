const router = require("express").Router();

const { carController } = require("../controllers");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/uploader");

router.get("/cars", carController.getAllCar);
router.get("/cars/id", carController.getCarById);

module.exports = router;