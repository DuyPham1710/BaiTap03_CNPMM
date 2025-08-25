interface ExpressRequest extends Request {
    query: any;
    body: any;
}
interface ExpressResponse {
    render: (view: string, data?: any) => void;
    send: (data: any) => void;
    status: (code: number) => ExpressResponse;
}
export declare class HomeMongoController {
    getFindAllCrudMongo(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    postCRUDMongo(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    getEditCRUDMongo(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    putCRUDMongo(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    deleteCRUDMongo(req: ExpressRequest, res: ExpressResponse): Promise<void>;
}
export {};
//# sourceMappingURL=homeMongoController.d.ts.map