import {  Request, Response } from "express";
import User from '../models/Item';

interface User{
    name:String,
    email:String,
    password:String
}

export const loginUser = async (req: Request, res: Response) => {
    const userData = req.body;
    const user_str = JSON.stringify(userData, null, 2)
    res.json({ message: "User created", user_str })
    // const {name,email,password} = req.body;
    // //Save data in MongoDB
    // try{
    //     const newUser = new User({ name , email, password });
    //     await newUser.save();
    // }catch{
    //     console.error("Data not Saved(Error)")
    // }
};

