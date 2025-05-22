import express from "express";
import {
    AddTranaction,
    deleteTrans,
    editTrans,
    getTransactions,
} from "../controllers/allcontrols.controller.js";

const router = express.Router();

router.post("/addTransaction", AddTranaction);
router.get("/getTransactions", getTransactions);
router.post("/editTrans", editTrans);
router.delete("/deleteTrans", deleteTrans);

export default router;
