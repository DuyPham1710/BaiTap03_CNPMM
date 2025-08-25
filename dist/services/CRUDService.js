"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserInfoById = exports.getAllUsers = exports.createNewUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = __importDefault(require("../models")); // import index.ts của Sequelize
const salt = bcrypt_1.default.genSaltSync(10);
const createNewUser = async (data) => {
    try {
        const hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await models_1.default.User.create({
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === "1" || data.gender === true,
            roleId: data.roleId,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.createNewUser = createNewUser;
const hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.hash(password, salt, (err, hash) => {
            if (err)
                reject(err);
            else
                resolve(hash);
        });
    });
};
const getAllUsers = async () => {
    try {
        const users = await models_1.default.User.findAll({ raw: true });
        return users;
    }
    catch (error) {
        throw error;
    }
};
exports.getAllUsers = getAllUsers;
const getUserInfoById = async (userId) => {
    try {
        const user = await models_1.default.User.findOne({
            where: { id: userId },
            raw: true,
        });
        return user;
    }
    catch (error) {
        throw error;
    }
};
exports.getUserInfoById = getUserInfoById;
const updateUser = async (data) => {
    try {
        const user = await models_1.default.User.findOne({ where: { id: data.id } });
        if (user) {
            user.firstName = data.firstName ?? user.firstName;
            user.lastName = data.lastName ?? user.lastName;
            user.address = data.address ?? user.address;
            await user.save();
            const allUsers = await models_1.default.User.findAll({ raw: true });
            return allUsers;
        }
        else {
            throw new Error("User not found");
        }
    }
    catch (error) {
        throw error;
    }
};
exports.updateUser = updateUser;
const deleteUser = async (userId) => {
    try {
        const user = await models_1.default.User.findOne({ where: { id: userId } });
        if (user) {
            await user.destroy();
            return "User deleted successfully";
        }
        else {
            throw new Error("User not found");
        }
    }
    catch (error) {
        throw error;
    }
};
exports.deleteUser = deleteUser;
