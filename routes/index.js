const router = require("express").Router();

const systemRoute = require("./systemRoute");
const userRoute = require("./userRoute");
const carRoute = require("./carRoute");

router.use("/", systemRoute);
router.use("/", userRoute);
router.use("/", carRoute);

module.exports = router;