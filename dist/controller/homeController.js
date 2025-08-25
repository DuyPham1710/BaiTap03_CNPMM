"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const models_1 = __importDefault(require("../models"));
const CRUDService = __importStar(require("../services/CRUDService"));
class HomeController {
    async getHomePage(req, res) {
        try {
            const users = await models_1.default.User.findAll();
            console.log("-----------------------------");
            console.log(users);
            console.log("-----------------------------");
            res.render("homepage.ejs", { data: JSON.stringify(users) });
        }
        catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    getAboutPage(req, res) {
        res.render("test/about.ejs");
    }
    getCRUD(req, res) {
        res.render("crud.ejs");
    }
    async getFindAllCrud(req, res) {
        try {
            const data = await CRUDService.getAllUsers();
            res.render("findAllUser.ejs", { datalist: data });
        }
        catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    async postCRUD(req, res) {
        const message = await CRUDService.createNewUser(req.body);
        console.log(message);
        await this.getFindAllCrud(req, res);
    }
    async getEditCRUD(req, res) {
        //   const userId = req.query.id as string;
        const userId = Number(req.query.id);
        if (userId) {
            const userData = await CRUDService.getUserInfoById(userId);
            res.render("editUser.ejs", { data: userData });
        }
        else {
            res.send("User not found");
        }
    }
    async putCRUD(req, res) {
        const data = req.body;
        try {
            const allUsers = await CRUDService.updateUser(data);
            res.render("findAllUser.ejs", { datalist: allUsers });
        }
        catch (error) {
            console.error("Error updating user:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    async deleteCRUD(req, res) {
        const userId = Number(req.query.id);
        if (userId) {
            try {
                await CRUDService.deleteUser(userId);
                await this.getFindAllCrud(req, res);
            }
            catch (error) {
                console.error("Error deleting user:", error);
                res.status(500).send("Internal Server Error");
            }
        }
        else {
            res.send("User not found");
        }
    }
}
exports.HomeController = HomeController;
