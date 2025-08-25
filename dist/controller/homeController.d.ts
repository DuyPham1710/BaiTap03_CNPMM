interface ExpressRequest extends Request {
    query: any;
    body: any;
}
interface ExpressResponse {
    render: (view: string, data?: any) => void;
    send: (data: any) => void;
    status: (code: number) => ExpressResponse;
}
export declare class HomeController {
    getHomePage(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    getAboutPage(req: ExpressRequest, res: ExpressResponse): void;
    getCRUD(req: ExpressRequest, res: ExpressResponse): void;
    getFindAllCrud(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    postCRUD(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    getEditCRUD(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    putCRUD(req: ExpressRequest, res: ExpressResponse): Promise<void>;
    deleteCRUD(req: ExpressRequest, res: ExpressResponse): Promise<void>;
}
export {};
//# sourceMappingURL=homeController.d.ts.map