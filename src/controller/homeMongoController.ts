import { Request, Response } from "express";
import db from "../models";
import CRUDMongoService from "../services/CRUDMongoService";

// MongoDB CRUD functions
const getFindAllCrudMongo = async (req: Request, res: Response): Promise<void> => {
    try {
        let data = await CRUDMongoService.getAllUsersMongo();
        res.render("findAllUserMongo.ejs", { datalist: data });
    } catch (error) {
        console.error("Error fetching MongoDB users:", error);
        res.status(500).send("Internal Server Error");
    }
};

const postCRUDMongo = async (req: Request, res: Response): Promise<void> => {
    try {
        let message = await CRUDMongoService.createNewUserMongo(req.body);
        console.log(message);
        getFindAllCrudMongo(req, res);
    } catch (error) {
        console.error("Error creating MongoDB user:", error);
        res.status(500).send("Internal Server Error");
    }
};

const getEditCRUDMongo = async (req: Request, res: Response): Promise<void> => {
    let userId = String(req.query.id);
    if (userId) {
        try {
            let userData = await CRUDMongoService.getUserInfoByIdMongo(userId);
            res.render("editUserMongo.ejs", { data: userData });
        } catch (error) {
            console.error("Error fetching MongoDB user:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        res.send("User not found");
    }
};

const putCRUDMongo = async (req: Request, res: Response): Promise<void> => {
    let data = req.body;
    try {
        let allUsers = await CRUDMongoService.updateUserMongo(data);
        res.render("findAllUserMongo.ejs", { datalist: allUsers });
    } catch (error) {
        console.error("Error updating MongoDB user:", error);
        res.status(500).send("Internal Server Error");
    }
};

const deleteCRUDMongo = async (req: Request, res: Response): Promise<void> => {
    let userId = String(req.query.id);
    if (userId) {
        try {
            await CRUDMongoService.deleteUserMongo(userId);
            getFindAllCrudMongo(req, res);
        } catch (error) {
            console.error("Error deleting MongoDB user:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        res.send("User not found");
    }

};

export default {
    getFindAllCrudMongo,
    postCRUDMongo,
    getEditCRUDMongo,
    putCRUDMongo,
    deleteCRUDMongo
};


