import express from "express";
import * as discog from "../../controllers/discog.js";

const discogRoutes = express.Router();

discogRoutes.route("/releases/:id").get(discog.getAlbumById);

discogRoutes.route("/artists/:id").get(discog.getArtistById);

discogRoutes.route("/search/database").get(discog.searchDatabase);

export default discogRoutes;
