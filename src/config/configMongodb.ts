import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {

        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectMongoDB;
