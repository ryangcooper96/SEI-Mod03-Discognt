import express from "express";
import * as collection from "../../controllers/collection.js";

const collectionRoutes = express.Router();

collectionRoutes.route("/new").post(collection.createCollection);
collectionRoutes.route("/:id").get(collection.getCollectionByOwner);

export default collectionRoutes;
