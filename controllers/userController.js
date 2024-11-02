const { User } = require("../models");
const { Op } = require("sequelize");
// const { bcrypt } = require("bcrypt");

const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            status: "Success",
            message: "Successfully get user data!",
            isSuccess: true,
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            status: "Field",
            message: error.message,
            isSuccess: false,
            data: null,
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User data not found!",
                isSuccess: false,
                data: null,
            });
        }
        res.status(200).json({
            status: "Success",
            message: "Successfully retrieved user data!",
            isSuccess: true,
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            status: "Field",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, username, email, password, role } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(404).json({
                status: "Failed",
                message: "Name, username, email and password are required!",
                isSuccess: false,
                data: null,
            });
        }

        const newUser = await User.create({
            name,
            username,
            email,
            password,
            role: role || "Member"
        })

        res.status(200).json({
            status: "Success",
            message: "User created seccessfully!",
            isSuccess: true,
            data: newUser,
        });
    } catch (err) {
        res.status(500).json({
            status: "Field",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, username, email, password, role } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User data not found!",
                isSuccess: false,
                data: null,
            });
        }

        await user.update({
            name,
            username,
            email,
            password,
            role,
        })

        res.status(200).json({
            status: "Success",
            message: "User updated successfully!",
            isSuccess: true,
            data: {
                User
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Field",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User data not found!",
                isSuccess: false,
                data: null,
            });
        }

        await user.destroy();

        res.status(200).json({
            status: "Success",
            message: "User data deleted successfully!",
            isSuccess: true,
            data: null,
        });
    } catch (err) {
        res.status(500).json({
            status: "Field",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};