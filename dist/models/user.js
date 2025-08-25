"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.initUserModel = initUserModel;
const sequelize_1 = require("sequelize");
// 3. Khai báo class model
class User extends sequelize_1.Model {
    // associations
    static associate(models) {
        // ví dụ: User.hasMany(models.Post);
    }
}
exports.User = User;
// 4. Hàm init model
function initUserModel(sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: sequelize_1.DataTypes.STRING,
        },
        phoneNumber: {
            type: sequelize_1.DataTypes.STRING,
        },
        gender: {
            type: sequelize_1.DataTypes.BOOLEAN,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
        },
        roleId: {
            type: sequelize_1.DataTypes.STRING,
        },
        positionId: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: "User",
        tableName: "Users",
        timestamps: true,
    });
    return User;
}
