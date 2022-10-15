import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    albumId: String,
    title: String,
    format: String,
    condition: String,
    price: Number,
    description: String,
    collectionlist: { type: mongoose.Schema.ObjectId, ref: "Collection" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Listing", listingSchema);
