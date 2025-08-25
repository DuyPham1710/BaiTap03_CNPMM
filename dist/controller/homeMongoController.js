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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMongoController = void 0;
const CRUDMongoService = __importStar(require("../services/CRUDMongoService"));
class HomeMongoController {
    async getFindAllCrudMongo(req, res) {
        try {
            const data = await CRUDMongoService.getAllUsersMongo();
            res.render("findAllUserMongo.ejs", { datalist: data });
        }
        catch (error) {
            console.error("Error fetching MongoDB users:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    async postCRUDMongo(req, res) {
        try {
            const message = await CRUDMongoService.createNewUserMongo(req.body);
            console.log(message);
            await this.getFindAllCrudMongo(req, res); // render lại danh sách
        }
        catch (error) {
            console.error("Error creating MongoDB user:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    async getEditCRUDMongo(req, res) {
        const userId = req.query.id;
        if (userId) {
            try {
                const userData = await CRUDMongoService.getUserInfoByIdMongo(userId);
                res.render("editUserMongo.ejs", { data: userData });
            }
            catch (error) {
                console.error("Error fetching MongoDB user:", error);
                res.status(500).send("Internal Server Error");
            }
        }
        else {
            res.send("User not found");
        }
    }
    async putCRUDMongo(req, res) {
        const data = req.body;
        try {
            const allUsers = await CRUDMongoService.updateUserMongo(data);
            res.render("findAllUserMongo.ejs", { datalist: allUsers });
        }
        catch (error) {
            console.error("Error updating MongoDB user:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    async deleteCRUDMongo(req, res) {
        const userId = req.query.id;
        if (userId) {
            try {
                await CRUDMongoService.deleteUserMongo(userId);
                await this.getFindAllCrudMongo(req, res);
            }
            catch (error) {
                console.error("Error deleting MongoDB user:", error);
                res.status(500).send("Internal Server Error");
            }
        }
        else {
            res.send("User not found");
        }
    }
}
exports.HomeMongoController = HomeMongoController;
