import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: String,
    paymentMethod: String,
    category: String,
    description: String,
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
