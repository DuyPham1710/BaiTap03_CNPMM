"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viewEngine_1 = __importDefault(require("./config/viewEngine"));
const body_parser_1 = __importDefault(require("body-parser"));
const web_1 = __importDefault(require("./route/web"));
const configdb_1 = __importDefault(require("./config/configdb"));
const configMongodb_1 = __importDefault(require("./config/configMongodb"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// config app
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
(0, viewEngine_1.default)(app);
(0, web_1.default)(app);
// Connect to both databases
(0, configdb_1.default)(); // MySQL connection
(0, configMongodb_1.default)(); // MongoDB connection
const port = parseInt(process.env.PORT) || 6969;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
