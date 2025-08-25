"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
// 2. Khai báo schema
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String },
    phoneNumber: { type: String },
    gender: { type: Boolean, default: false },
    roleId: { type: String },
    createdAt: { type: Date, default: Date.now },
}, {
    collection: "users", // giống như tham số thứ 3 trong mongoose.model
});
// 3. Tạo model
exports.User = (0, mongoose_1.model)("User", userSchema);
