import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    customer_name: String,
    customer_email: String,
    delivery_address: String,
    status: {
      type: String,
      default: "Not processed",
      enum: [
        "Not processed",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
    },
    owner: { type: mongoose.Schema.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cart", CartSchema);
