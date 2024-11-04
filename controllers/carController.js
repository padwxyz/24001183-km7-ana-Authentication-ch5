const { Car } = require("../models");
const { Op } = require("sequelize");
const { imagekit } = require("../lib/imagekit");

const getAllCar = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.status(200).json({
            status: "Success",
            message: "Successfully retrived car data!",
            isSuccess: true,
            data: cars,
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

const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findByPk(id);
        if (!car) {
            return res.status(404).json({
                status: "Failed",
                message: "Car data not found!",
                isSuccess: false,
                data: null,
            });
        }
        res.status(200).json({
            status: "Success",
            message: "Successfully retrieved car data!",
            isSuccess: true,
            data: car,
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

const createCar = async (req, res) => {
    try {
        const { model, type, year, price, imageUrl, createdBy } = req.body;
        if (!model || !type || !year || !price) {
            return res.status(400).json({
                status: "Failed",
                message: "Model, type, year and price are required!",
                isSuccess: false,
                data: null,
            });
        }

        const newCar = await Car.create({
            model,
            type,
            year,
            price,
            imageUrl,
            createdBy: createdBy || "Admin",
        })

        res.status(201).json({
            status: "Success",
            message: "",
            isSuccess: true,
            data: {}
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

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const { model, type, year, price, imageUrl, lastUpdatedBy } = req.body;

        const car = await Car.findByPk(id);
        if (!car) {
            return res.status(404).json({
                status: "Failed",
                message: "Car data not found!",
                isSuccess: false,
                data: null,
            });
        }

        await car.update({
            model,
            type,
            year,
            price,
            imageUrl,
            lastUpdatedBy: lastUpdatedBy || "Admin",
        })

        res.status(200).json({
            status: "Success",
            message: "Car data updated seccessfully!",
            isSuccess: true,
            data: car,
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

const deleteCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const car = await Car.findByPk(id);

        if (!car) {
            return res.status(404).json({
                status: "Failed",
                message: "Car data not found!",
                isSuccess: false,
                data: null,
            });
        }

        await car.destroy();

        res.status(200).json({
            status: "Success",
            message: "Car data deleted successfully!",
            isSuccess: true,
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: "Field",
            message: err.message,
            isSuccess: false,
            data: null,
        });
    }
};

module.exports = {
    getAllCar,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};