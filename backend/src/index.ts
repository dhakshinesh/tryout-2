import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./routers/routes";
import dotenv from "dotenv"


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//middlewares
app.use(cors());
app.use(bodyParser.json());

//connect to MongoDB
const mongo_uri = process.env.MONGO_URI!;
mongoose.connect(mongo_uri)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to Connect",err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post("/api/register", router)

