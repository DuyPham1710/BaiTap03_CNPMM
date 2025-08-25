"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserMongo = exports.updateUserMongo = exports.getUserInfoByIdMongo = exports.getAllUsersMongo = exports.createNewUserMongo = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_mongo_1 = require("../models/user_mongo");
const salt = bcrypt_1.default.genSaltSync(10);
// 🔹 Tạo user mới
const createNewUserMongo = async (data) => {
    try {
        const hashPasswordFromBcrypt = await hashUserPassword(data.password);
        const newUser = new user_mongo_1.User({
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === true || data.gender === false,
            roleId: data.roleId,
        });
        await newUser.save();
        return newUser;
    }
    catch (error) {
        throw error;
    }
};
exports.createNewUserMongo = createNewUserMongo;
// 🔹 Hash password
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
// 🔹 Lấy toàn bộ users
const getAllUsersMongo = async () => {
    return await user_mongo_1.User.find({}).lean();
};
exports.getAllUsersMongo = getAllUsersMongo;
// 🔹 Lấy user theo ID
const getUserInfoByIdMongo = async (userId) => {
    return await user_mongo_1.User.findById(userId).lean();
};
exports.getUserInfoByIdMongo = getUserInfoByIdMongo;
// 🔹 Cập nhật user
const updateUserMongo = async (data) => {
    const user = await user_mongo_1.User.findById(data.id);
    if (!user) {
        throw new Error("User not found");
    }
    user.firstName = data.firstName ?? user.firstName;
    user.lastName = data.lastName ?? user.lastName;
    user.address = data.address ?? user.address;
    user.name = `${user.firstName} ${user.lastName}`;
    await user.save();
    return await user_mongo_1.User.find({}).lean();
};
exports.updateUserMongo = updateUserMongo;
// 🔹 Xoá user
const deleteUserMongo = async (userId) => {
    const user = await user_mongo_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    await user_mongo_1.User.findByIdAndDelete(userId);
    return "User deleted successfully";
};
exports.deleteUserMongo = deleteUserMongo;
