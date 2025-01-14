import { Request, Response } from 'express';
import { getAllUsers, createUser } from '../services/users';
import * as Console from "node:console";

export const getUsers = async (req:Request, res: Response) => {
    try {
        Console.log(req.body);
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const createUserController = async (req: Request, res: Response) => {
    const {name, password} = req.body;
    try {
        const user = await createUser(name, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error});
    }
}
