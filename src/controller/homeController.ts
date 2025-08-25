import { Request, Response } from "express";
import db from "../models";
import CRUDService from "../services/CRUDService";

const getHomePage = async (req: Request, res: Response): Promise<void> => {
    try {
        let users = await db.User.findAll();
        console.log("-----------------------------");
        console.log(users);
        console.log("-----------------------------");

        res.render("homepage.ejs", { data: JSON.stringify(users) });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
};


const getAboutPage = (req: Request, res: Response): void => {
    res.render("test/about.ejs");
};

const getCRUD = (req: Request, res: Response): void => {
    res.render("crud.ejs");
};

const getFindAllCrud = async (req: Request, res: Response): Promise<void> => {
    try {
        let data = await CRUDService.getAllUsers();
        res.render("findAllUser.ejs", { datalist: data });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
};

const postCRUD = async (req: Request, res: Response): Promise<void> => {
    try {
        let message = await CRUDService.createNewUser(req.body);
        console.log(message);
        getFindAllCrud(req, res);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

const getEditCRUD = async (req: Request, res: Response): Promise<void> => {
    let userId = Number(req.query.id);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        res.render("editUser.ejs", { data: userData });
    } else {
        res.send("User not found");
    }
};


const putCRUD = async (req: Request, res: Response): Promise<void> => {
    let data = req.body;
    try {
        let allUsers = await CRUDService.updateUser(data);
        res.render("findAllUser.ejs", { datalist: allUsers });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

const deleteCRUD = async (req: Request, res: Response): Promise<void> => {
    let userId = Number(req.query.id);
    if (userId) {
        try {
            await CRUDService.deleteUser(userId);
            getFindAllCrud(req, res);
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        res.send("User not found");
    }

};

export default {
    getHomePage,
    getAboutPage,
    getCRUD,
    getFindAllCrud,
    postCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
};
