import Collection from "../models/collection.js";

// create
export async function createCollection(req, res) {
  const collection = new Collection(req.body);
  try {
    await collection.save();
    res.json(collection);
  } catch (err) {
    res.status(400).json(err);
  }
}

// get collection by owner
export async function getCollectionByOwner(req, res) {
  try {
    const collection = await Collection.find({ owner: req.params.id });
    if (!collection)
      return res.status(400).json({
        error: "Collection not found",
      });
    res.json(collection);
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve collection.",
    });
  }
}

// get collection by id, populate "owner"
export async function getCollectionById(req, res) {
  try {
    const collection = await Collection.findById(req.params.id).populate(
      "owner"
    );
    if (!collection)
      return res.status(400).json({
        error: "Collection not found",
      });
    res.json(collection);
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve collection.",
    });
  }
}
