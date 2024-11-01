const router = require("express").Router();
const { systemController } = require("../controllers");

router.get("/health-check", systemController.healthcheck);

module.exports = router;