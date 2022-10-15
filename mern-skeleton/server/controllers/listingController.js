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
      collectionlist: req.body.collectionlist,
    }).sort("title");
    //   .populate("collectionlist");
    res.json(listings);
  } catch (err) {
    return res.status(400).json(err);
  }
}

// .sort(): format || condition || price?
export async function getListingsByAlbumId(req, res) {
  try {
    const listings = await Listing.find({
      albumId: req.body.albumId,
    }).sort("price");
    //   .populate("collectionlist");
    res.json(listings);
  } catch (err) {
    return res.status(400).json(err);
  }
}

// works, despite some error message in
export async function getListingById(req, res, next) {
  try {
    const listing = await Listing.findById(req.params.id);
    //   .populate("collectionlist")
    //   .exec();
    if (!listing)
      return res.status(400).json({
        error: "Listing not found",
      });
    res.json(listing);
    next();
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
