import express from "express";
import * as listingController from "../../controllers/listingController.js";

const listingRoutes = express.Router();

listingRoutes.route("/new").post(listingController.createListing);

listingRoutes
  .route("/collection")
  .get(listingController.getListingsByCollection);

listingRoutes.route("/album").get(listingController.getListingsByAlbumId);

listingRoutes
  .route("/:id")
  .get(listingController.getListingById)
  .patch(listingController.updateListing)
  .delete(listingController.deleteListing);

export default listingRoutes;
