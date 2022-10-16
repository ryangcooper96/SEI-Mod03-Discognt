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

// read one
export async function getCollectionByOwner(req, res) {
  try {
    const collection = await Collection.find({ owner: req.params.id });
    res.json(collection);
  } catch (err) {
    return res.status(400).json(err);
  }
}
