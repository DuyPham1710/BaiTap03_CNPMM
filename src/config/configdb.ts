import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASS as string, {
    host: process.env.DB_HOST as string,
    dialect: "mysql",
    logging: false
});

const connectDB = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        // Sync database (create tables if they don't exist)
        await sequelize.sync({ force: false });
        console.log("Database synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { sequelize };
export default connectDB;
