import bcrypt from "bcrypt";
import User, { IUser } from "../models/user_mongo";

// Salt để hash password
const salt = bcrypt.genSaltSync(10);

// Hàm hash password
const hashUserPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, salt);
};

// Tạo user mới
const createNewUserMongo = async (data: Partial<IUser>): Promise<IUser> => {
    try {
        const hashPasswordFromBcrypt = await hashUserPassword(data.password as string);

        const newUser = new User({
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === true || data.gender === false,
            roleId: data.roleId,
        });

        await newUser.save();
        return newUser;
    } catch (error) {
        throw error;
    }
};

// Lấy tất cả user
const getAllUsersMongo = async (): Promise<IUser[]> => {
    try {
        return await User.find({}).lean();
    } catch (error) {
        throw error;
    }
};

// Lấy user theo id
const getUserInfoByIdMongo = async (userId: string): Promise<IUser | null> => {
    try {
        return await User.findById(userId).lean();
    } catch (error) {
        throw error;
    }
};

// Update user
const updateUserMongo = async (data: Partial<IUser> & { id: string }): Promise<IUser[]> => {
    try {
        const user = await User.findById(data.id);
        if (user) {
            user.firstName = data.firstName ?? user.firstName;
            user.lastName = data.lastName ?? user.lastName;
            user.address = data.address ?? user.address;
            user.name = `${data.firstName ?? user.firstName} ${data.lastName ?? user.lastName}`;
            await user.save();

            return await User.find({}).lean();
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        throw error;
    }
};

// Xóa user
const deleteUserMongo = async (userId: string): Promise<string> => {
    try {
        const user = await User.findById(userId);
        if (user) {
            await User.findByIdAndDelete(userId);
            return "User deleted successfully";
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        throw error;
    }
};

export default {
    createNewUserMongo,
    getAllUsersMongo,
    getUserInfoByIdMongo,
    updateUserMongo,
    deleteUserMongo
}