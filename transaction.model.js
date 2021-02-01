const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    trnsType: {
      type: Number,
      required: [true, "Transaction type is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount type is required"],
    },
    commission: {
      type: Number,
    },
    customer: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
