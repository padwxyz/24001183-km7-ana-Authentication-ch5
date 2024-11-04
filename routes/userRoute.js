const router = require("express").Router();

const { userController } = require("../controllers");
const authenticate = require("../middlewares/authenticate");

router.get("/users", userController.getAllUser);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;