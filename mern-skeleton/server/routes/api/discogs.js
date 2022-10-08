import express from "express";
import * as discogController from "../../controllers/discogController.js";

const discogRoutes = express.Router();

// all my routes

// discogRoutes.route("/releases").get(discogController.getAllAlbums);

discogRoutes.route("/releases/:id").get(discogController.getAlbumById);

// discogRoutes.route("/artists").get(discogController.getAllArtists);

discogRoutes.route("/artists/:id").get(discogController.getArtistById);

discogRoutes
  .route("/artists/:id/releases")
  .get(discogController.getReleasesByArtistId);

discogRoutes.route("/search/artists").get(discogController.searchForArtists);
discogRoutes.route("/search/releases").get(discogController.searchForReleases);
// discogRoutes.route("search/genre").get(discogController.searchForGenres);

export default discogRoutes;
