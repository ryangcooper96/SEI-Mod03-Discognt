import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    customer_name: String,
    customer_email: String,
    delivery_address: String,
    updated: Date,
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

const Cart = mongoose.model("Cart", CartSchema);

export { Cart, CartItem };
