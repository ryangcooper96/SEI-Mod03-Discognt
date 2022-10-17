import Cart from "../models/cart.js";

export async function createCart(req, res) {
  const cart = new Cart(req.body);
  try {
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getCartByOwnerId(req, res) {
  try {
    const cart = await Cart.find({ owner: req.params.id }).populate("owner");
    if (!cart)
      return res.status(400).json({
        error: "Cart not found",
      });
    res.json(cart);
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve cart",
    });
  }
}

export async function getCartById(req, res) {
  try {
    const cart = await Cart.findById(req.params.id).populate("owner");
    if (!cart)
      return res.status(400).json({
        error: "Cart not found",
      });
    res.json(cart);
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve cart",
    });
  }
}

export async function updateCart(req, res) {
  const id = req.params.id;
  const update = req.body;
  try {
    const cart = await Cart.findByIdAndUpdate(id, update, { new: true });
    await cart.save();
    res.json(cart);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export async function deleteCart(req, res) {
  try {
    const id = req.params.id;
    const cart = await Cart.findByIdAndDelete(id);
    res.json(cart);
  } catch (err) {
    return res.status(400).json(err);
  }
}
