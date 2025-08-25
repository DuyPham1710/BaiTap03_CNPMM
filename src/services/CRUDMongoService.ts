// import bcrypt from "bcrypt";
// import { User, IUser } from "../models/user_mongo.js";

// const salt = bcrypt.genSaltSync(10);

// // 🔹 Tạo user mới
// export const createNewUserMongo = async (data: Partial<IUser>): Promise<IUser> => {
//     try {
//         const hashPasswordFromBcrypt = await hashUserPassword(data.password!);

//         const newUser = new User({
//             name: `${data.firstName} ${data.lastName}`,
//             email: data.email,
//             password: hashPasswordFromBcrypt,
//             firstName: data.firstName,
//             lastName: data.lastName,
//             address: data.address,
//             phoneNumber: data.phoneNumber,
//             gender: data.gender === true || data.gender === false,
//             roleId: data.roleId,
//         });

//         await newUser.save();
//         return newUser;
//     } catch (error) {
//         throw error;
//     }
// };

// // 🔹 Hash password
// const hashUserPassword = (password: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         bcrypt.hash(password, salt, (err, hash) => {
//             if (err) reject(err);
//             else resolve(hash);
//         });
//     });
// };

// // 🔹 Lấy toàn bộ users
// export const getAllUsersMongo = async (): Promise<IUser[]> => {
//     return await User.find({}).lean<IUser[]>();
// };

// // 🔹 Lấy user theo ID
// export const getUserInfoByIdMongo = async (userId: string): Promise<IUser | null> => {
//     return await User.findById(userId).lean<IUser>();
// };

// // 🔹 Cập nhật user
// export const updateUserMongo = async (data: Partial<IUser> & { id: string }): Promise<IUser[]> => {
//     const user = await User.findById(data.id);
//     if (!user) {
//         throw new Error("User not found");
//     }

//     user.firstName = data.firstName ?? user.firstName;
//     user.lastName = data.lastName ?? user.lastName;
//     user.address = data.address ?? user.address;
//     user.name = `${user.firstName} ${user.lastName}`;

//     await user.save();

//     return await User.find({}).lean<IUser[]>();
// };

// // 🔹 Xoá user
// export const deleteUserMongo = async (userId: string): Promise<string> => {
//     const user = await User.findById(userId);
//     if (!user) {
//         throw new Error("User not found");
//     }

//     await User.findByIdAndDelete(userId);
//     return "User deleted successfully";
// };
