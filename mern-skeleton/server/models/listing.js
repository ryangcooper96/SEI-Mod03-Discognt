import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true }
    }
)

export default mongoose.model('Listing', listingSchema)