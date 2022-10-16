import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String },
});

export default mongoose.model("Listing", wishlistSchema);
