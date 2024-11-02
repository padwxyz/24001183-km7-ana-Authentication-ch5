const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (res, req) => {
    try {
        const { name, username, email, password, role } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(404).json({
                status: "Failed",
                message: "Please provide name, username, email and password",
                isSuccess: false,
                data: null,
            });
        };

        const hasedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            username,
            email,
            password: hasedPassword,
            role: role || "Member",
        });

        res.status(201).json({
            status: "Success",
            message: "User registered successfully!",
            isSuccess: true,
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
}

const login = async (res, req) => {
    try {
        const { email, password } = req.body;

        if (!email || password) {
            return res.status(400).json({
                status: "Error",
                message: "Both email and password are required!",
                isSuccess: false,
                data: null,
            })
        }

        const user = await User.findOne({
            where: { email },
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "name", "username", "email", "password", "role"],
                },
            ],
        });

        if (!user) {
            return res.status(404).json({
                status: "Error",
                message: "User not found!",
                isSuccess: false,
                data: null,
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            return res.status(401).json({
                status: "Failed",
                message: "Inccorect password, please try again!",
                isSuccess: false,
                data: null,
            });
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.User.role
        },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRED
            }
        );

        res.status(200).json({
            status: "Success",
            message: "Login successfully!",
            isSuccess: true,
            data: {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role,
                token,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

const authenticate = async (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "User authenticated successfully!",
            isSuccess: true,
            data: {
                user: req.user,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

module.exports = {
    register,
    login,
    authenticate
}