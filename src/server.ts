import express, { Express } from "express";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web";
import connectDB from "./config/configdb";
import connectMongoDB from "./config/configMongodb";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

// Connect to both databases
connectDB(); // MySQL connection
connectMongoDB(); // MongoDB connection

const port: number = parseInt(process.env.PORT as string) || 6969;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});