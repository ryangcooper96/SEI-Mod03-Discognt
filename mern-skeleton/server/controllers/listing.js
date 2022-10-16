import Listing from "../models/listing.js";

export async function createListing(req, res) {
  const listing = new Listing(req.body);
  try {
    await listing.save();
    res.json(listing);
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getListingsByCollection(req, res) {
  try {
    const listings = await Listing.find({
      in_collection: req.params.id,
    }).sort("title");
    //   .populate("in_collection");
    res.json(listings);
  } catch (err) {
    return res.status(400).json(err);
  }
}

// .sort(): format || condition || price?
export async function getListingsByAlbumId(req, res) {
  try {
    const listings = await Listing.find({
      albumId: req.params.id,
    }).sort("price");
    //   .populate("in_collection");
    res.json(listings);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export async function getListingById(req, res) {
  try {
    const listing = await Listing.findById(req.params.id);
    //   .populate("in_collection")
    //   .exec();
    if (!listing)
      return res.status(400).json({
        error: "Listing not found",
      });
    res.json(listing);
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve listing",
    });
  }
}

export async function updateListing(req, res) {
  const id = req.params.id;
  const update = req.body;
  try {
    const listing = await Listing.findByIdAndUpdate(id, update, { new: true });
    await listing.save();
    res.json(listing);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export async function deleteListing(req, res) {
  try {
    const id = req.params.id;
    const listing = await Listing.findByIdAndDelete(id);
    res.json(listing);
  } catch (err) {
    return res.status(400).json(err);
  }
}
