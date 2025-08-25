export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address?: string;
    phoneNumber?: string;
    gender: boolean;
    roleId?: string;
    createdAt: Date;
}
//# sourceMappingURL=user_mongo.d.ts.map