"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeController_1 = require("../controller/homeController");
const homeMongoController_1 = require("../controller/homeMongoController");
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const homeController = new homeController_1.HomeController();
const homeMongoController = new homeMongoController_1.HomeMongoController();
let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Pham Ngoc Duy');
    });
    // SEQUELIZE ROUTES
    router.get("/home", (req, res) => homeController.getHomePage(req, res));
    router.get("/about", (req, res) => homeController.getAboutPage(req, res));
    router.get("/crud", (req, res) => homeController.getCRUD(req, res));
    router.post("/post-crud", (req, res) => homeController.postCRUD(req, res));
    router.get("/get-crud", (req, res) => homeController.getFindAllCrud(req, res));
    router.get("/edit-crud", (req, res) => homeController.getEditCRUD(req, res));
    router.post("/put-crud", (req, res) => homeController.putCRUD(req, res));
    router.get("/delete-crud", (req, res) => homeController.deleteCRUD(req, res));
    // MONGODB ROUTES
    router.get("/crud-mongo", (req, res) => homeController.getCRUD(req, res));
    router.post("/post-crud-mongo", (req, res) => homeMongoController.postCRUDMongo(req, res));
    router.get("/get-crud-mongo", (req, res) => homeMongoController.getFindAllCrudMongo(req, res));
    router.get("/edit-crud-mongo", (req, res) => homeMongoController.getEditCRUDMongo(req, res));
    router.post("/put-crud-mongo", (req, res) => homeMongoController.putCRUDMongo(req, res));
    router.get("/delete-crud-mongo", (req, res) => homeMongoController.deleteCRUDMongo(req, res));
    return app.use('/', router);
};
exports.default = initWebRoutes;
