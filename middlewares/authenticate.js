const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
    console.log(req.headers.authorization);

    try {
        const bearerToken = req.headers.authorization
        if (!bearerToken) {
            res.status(401).json({
                status: "Failed",
                message: "Token is missing!",
                isSuccess: false,
                data: null
            });
        }

        const token = bearerToken.split("Bearer ")[1];

        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findNyPk(payload.userId)

        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
            data: null
        });
    }
};