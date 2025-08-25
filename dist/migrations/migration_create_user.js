"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
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
                allowNull: true,
            },
            phoneNumber: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            gender: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
            },
            image: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            roleId: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            positionId: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("Users");
    },
};
