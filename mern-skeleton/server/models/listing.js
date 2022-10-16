import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    albumId: String,
    title: String,
    format: String,
    condition: String,
    price: Number,
    description: String,
    in_collection: { type: mongoose.Schema.ObjectId, ref: "Collection" },
    in_cart: { type: mongoose.Schema.ObjectId, ref: "Cart" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Listing", listingSchema);
