import { Request, Response } from "express";
import User from '../models/Item';

interface User {
    name: String,
    email: String,
    password: String
}

export const loginUser = async (req: Request, res: Response) => {
    const userData = req.body;
    const user_str = JSON.stringify(userData, null, 2)
    res.json({ message: "User created", user_str })
    const { name, email, password } = req.body;
    //Save data in MongoDB
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        console.log("Data Saved Successfully");
    } catch {
        console.error("Data not Saved(Error)")
    }
};

export const getUser = async (req: Request, res: Response) => {

    try {
        console.log("Fetching all users");
        const user = await User.find().lean();
        const sanitized = user.map(user => ({
            ...user,
            _id: user._id.toString()
        }));
        console.log(user);
        res.json(sanitized);
        return;
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Error fetching users", error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, password }
        );

        if (!updateUser) {
            res.status(404).json({
                message: "User Not Found"
            });
        }

        res.json({
            message: "User Updated", user: updatedUser
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: "Server Error", error
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    console.log("function Called");
    try {
        const updatedUser = await User.findByIdAndDelete(
            userId,
        );
        console.log(updatedUser)

        if (!updatedUser) {
            res.status(404).json({
                message: "User Not Found"
            });
        }

        res.json({
            message: "User Updated", user: updatedUser
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: "Server Error", error
        });
    }
}