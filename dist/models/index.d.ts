declare const readdirSync: any;
declare const basename: any, join: any;
declare const Sequelize: any, DataTypes: any, Model: any;
declare const config: any;
interface DatabaseConfig {
    use_env_variable?: string;
    database: string;
    username: string;
    password: string;
    host: string;
    dialect: string;
}
interface Database {
    sequelize: any;
    Sequelize: any;
    [key: string]: any;
}
declare const env: string;
declare const dbConfig: DatabaseConfig;
declare const dbModel: Database;
declare let sequelize: any;
//# sourceMappingURL=index.d.ts.map