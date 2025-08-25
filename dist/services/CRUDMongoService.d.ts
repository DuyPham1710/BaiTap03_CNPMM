declare const bcryptMongo: any;
declare const UserMongo: any;
declare const saltMongo: any;
interface IUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: string;
    phoneNumber?: string;
    gender: string;
    roleId?: string;
}
interface IUpdateUserData {
    id: string;
    firstName: string;
    lastName: string;
    address?: string;
}
declare const createNewUserMongo: (data: IUserData) => Promise<any>;
declare const hashUserPasswordMongo: (password: string) => Promise<string>;
declare const getAllUsersMongo: () => Promise<any[]>;
declare const getUserInfoByIdMongo: (userId: string) => Promise<any | null>;
declare const updateUserMongo: (data: IUpdateUserData) => Promise<any[]>;
declare const deleteUserMongo: (userId: string) => Promise<string>;
//# sourceMappingURL=CRUDMongoService.d.ts.map