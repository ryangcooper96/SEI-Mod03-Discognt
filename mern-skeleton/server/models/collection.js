import mongoose from "mongoose";
const collectionSchema = new mongoose.Schema(
  {
    rating: Number,
    number_of_ratings: Number,
    owner: { type: mongoose.Schema.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Collection", collectionSchema);
