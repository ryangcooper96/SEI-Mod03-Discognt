import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: "Listing" },
  quantity: Number,
  shop: { type: mongoose.Schema.ObjectId, ref: "Collection" },
  status: {
    type: String,
    default: "Not processed",
    enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
  },
});
const CartItem = mongoose.model("CartItem", CartItemSchema);

const CartSchema = new mongoose.Schema(
  {
    products: [CartItemSchema],
    customer_name: String,
    customer_email: String,
    delivery_address: String,
    updated: Date,
    user: { type: mongoose.Schema.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", CartSchema);

export { Cart, CartItem };
