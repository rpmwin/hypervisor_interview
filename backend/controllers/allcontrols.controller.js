import mongoose from "mongoose";
import { Transaction } from "../db/transactionSchema.js";

export const AddTranaction = async (req, res) => {
    try {
        const { amount, paymentMethod, category, description } = req.body;

        if (!amount || !paymentMethod || !category || !description) {
            return res.status(402).json({
                message: "Please provide all the details",
            });
        }

        const trans = new Transaction({
            amount,
            paymentMethod,
            category,
            description,
        });

        await trans.save();

        return res.status(200).json({
            message: " added new Transaction",
            trans,
        });
    } catch (error) {
        console.log("some erro occured in addTransaction ", error);
        res.status(500).json({
            message: "some error occured ",
        });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const rec = await Transaction.find();
        console.log(rec);

        return res.status(200).json({
            message: " all the transaction sent!!",
            rec,
        });
    } catch (error) {
        console.log("some erro occured in getting all Transaction ", error);
        res.status(500).json({
            message: "some error occured ",
        });
    }
};

export const editTrans = async (req, res) => {
    try {
        const { id, amount, paymentMethod, category, description } = req.body;

        if (!id || !amount || !paymentMethod || !category || !description) {
            return res
                .status(400)
                .json({ message: "Please provide all the details" });
        }

        const trans = await Transaction.findById(id);

        if (!trans) {
            return res
                .status(404)
                .json({ message: "Transaction does not exist" });
        }

        trans.amount = amount;
        trans.paymentMethod = paymentMethod;
        trans.category = category;
        trans.description = description;

        await trans.save();

        return res.status(200).json({
            message: "Transaction edited successfully",
            transaction: trans,
        });
    } catch (error) {
        console.error("Error editing transaction:", error);
        res.status(500).json({
            message: "An error occurred while editing the transaction",
        });
    }
};

export const deleteTrans = async (req, res) => {
    try {
        const { idd } = req.body;

        if (!idd) {
            return res
                .status(400)    
                .json({ message: "Please provide the transaction ID" });
        }

        const trans = await Transaction.findById(idd);

        if (!trans) {
            return res
                .status(404)
                .json({ message: "Transaction does not exist" });
        }

        await Transaction.deleteOne({ _id: idd });

        return res
            .status(200)
            .json({ message: "Transaction deleted successfully" });
    } catch (error) {
        console.error("Error deleting transaction:", error);
        res.status(500).json({
            message: "An error occurred while deleting the transaction",
        });
    }
};
