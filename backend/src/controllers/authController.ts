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
    const {name,email,password} = req.body;
    //Save data in MongoDB
    try{
        const newUser = new User({ name , email, password });
        await newUser.save();
        console.log("Data Saved Successfully");
    }catch{
        console.error("Data not Saved(Error)")
    }
};

export const getUser = async (req: Request, res:Response) => {
    try{
        const user = await User.find();
        res.json({
            message: "All users",user
        });
        return user;
    } catch(error){
        console.log("Error",error);
        res.status(500).json({ message: "Error fetching users", error });
    }
};