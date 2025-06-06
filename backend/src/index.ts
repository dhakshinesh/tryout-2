import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./routers/routes";


const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user-form-db')
    .then(() => {
        console.log('Connected to MongoDB');
        // Start server only after DB connects
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.post("/api/register", router)

