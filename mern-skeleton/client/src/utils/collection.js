const BASE_URL = "/api/collections/";

// create collection for user
//
// automatically runs at the end of user signup
// and adds user's id from token
// (inserted in SignupForm at the end of the signup process)
function create(ownerId) {
  let collection = {};
  collection.owner = ownerId;
  return fetch(BASE_URL + "new/", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(collection),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error.");
  });
}

// get collection by owner id
// get logged in user's id: await userService.getUser()._id;
function get(ownerid) {
  return fetch(BASE_URL + ownerid, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Collection not found.");
  });
}

const exports = {
  create,
  get,
};

export default exports;
