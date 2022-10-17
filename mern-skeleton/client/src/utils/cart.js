const BASE_URL = "/api/cart/";

function createCart(ownerId) {
  let cart = {};
  cart.owner = ownerId;
  return fetch(BASE_URL + "new/", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(cart),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error.");
  });
}

function getCartByOwnerId(ownerId) {
  return fetch(BASE_URL + "owner/" + ownerId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Cart not found.");
  });
}

function updateCart(ownerId, update) {
  return fetch(BASE_URL + ownerId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Can't find this Cart.");
  });
}

function deleteCart(ownerId) {
  return fetch(BASE_URL + ownerId, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Can't find this cart.");
  });
}

const exports = {
  createCart,
  getCartByOwnerId,
  updateCart,
  deleteCart,
};

export default exports;
