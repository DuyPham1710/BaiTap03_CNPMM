import { Schema, model, Document } from "mongoose";

// Interface cho document User
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address?: string;
    phoneNumber?: string;
    gender?: boolean;
    roleId?: string;
    createdAt?: Date;
}

// Schema
const userSchema = new Schema<IUser>(
    {
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
    },
    {
        collection: "users", // tương ứng với tham số thứ 3 trong require
    }
);

// Model
const User = model<IUser>("User", userSchema);

export default User;
