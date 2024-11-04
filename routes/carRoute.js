const router = require("express").Router();

const { carController } = require("../controllers");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/uploader");

router.get("/cars", carController.getAllCar);
router.get("/cars/:id", carController.getCarById);
router.post("/cars", carController.createCar);
router.patch("/cars/:id", carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);

module.exports = router;