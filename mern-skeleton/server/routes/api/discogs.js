import express from "express";
import * as discogController from "../../controllers/discogController.js";

const discogRoutes = express.Router();

discogRoutes.route("/releases/:id").get(discogController.getAlbumById);

discogRoutes.route("/artists/:id").get(discogController.getArtistById);

// discogRoutes
//   .route("/artists/:id/releases")
//   .get(discogController.getReleasesByArtistId);

discogRoutes.route("/search/database").get(discogController.searchDatabase);

export default discogRoutes;
