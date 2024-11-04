const router = require("express").Router();

const { userController } = require("../controllers");
const authenticate = require("../middlewares/authenticate");

router.get("/users", userController.getAllUser);
router.get("/users/:id", userController.getUserById);

module.exports = router;