import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import connectdb from "./db/conectdb.js";
import router from "./routes/UserRoute.route.js";
import cors from "cors";

const app = express();

connectdb();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("backend is running!!");
});

app.listen(5000, () => {
    console.log("backend is running at port 5000");
});
