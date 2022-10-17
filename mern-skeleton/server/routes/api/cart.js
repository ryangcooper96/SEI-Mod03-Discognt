import express from "express";
import * as cart from "../../controllers/cart.js";

const cartRoutes = express.Router();

cartRoutes.route("/new").post(cart.createCart);

cartRoutes.route("/owner/:id").get(cart.getCartByOwnerId);

cartRoutes
  .route("/:id")
  .get(cart.getCartById)
  .patch(cart.updateCart)
  .delete(cart.deleteCart);

export default cartRoutes;
