import { NextFunction, Request, Response } from "express";
import User from '../models/Item';


export const loginUser = (req: Request, res: Response) => {
    const userData = req.body;
    const user_str = JSON.stringify(userData, null, 2)
    res.json({ message: "User created", user_str })
};

