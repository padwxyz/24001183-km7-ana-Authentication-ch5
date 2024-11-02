const router = require("express").Router();
const { userController } = require("../controllers");

router.get("/users", userController.getAllUser);

module.exports = router;