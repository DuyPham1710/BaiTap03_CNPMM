declare const bcryptService: any;
declare const dbService: any;
declare const saltService: any;
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
declare const createNewUser: (data: IUserData) => Promise<void>;
declare const hashUserPassword: (password: string) => Promise<string>;
declare const getAllUsers: () => Promise<any[]>;
declare const getUserInfoById: (userId: string) => Promise<any | null>;
declare const updateUser: (data: IUpdateUserData) => Promise<any[]>;
declare const deleteUser: (userId: string) => Promise<string>;
//# sourceMappingURL=CRUDService.d.ts.map