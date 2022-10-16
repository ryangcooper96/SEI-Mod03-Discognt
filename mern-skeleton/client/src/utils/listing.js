import collection from "./collection.js";
import userService from "./userService.js";
const BASE_URL = "/api/listings/";

// create listing by logged in user
function createListing(listing) {
  const userId = loggedInUser(); // from token
  return collectionId(userId)
    .then((collectionId) => {
      listing.in_collection = collectionId;
      return listing;
    })
    .then((listing) => {
      return fetch(BASE_URL + "new", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(listing),
      });
    })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Error.");
    });
}

// get listings by logged in user
function getListingsbyLoggedInUser() {
  const userId = loggedInUser(); // from token
  return collectionId(userId).then((id) => {
    return getListingsByCollection(id).then((listings) => {
      return listings;
    });
  });
}

// get listings by user id
function getListingsbyUser(userId) {
  return collectionId(userId).then((collectionId) => {
    return getListingsByCollection(collectionId).then((listings) => {
      return listings;
    });
  });
}

// get listings by collection id
function getListingsByCollection(collectionId) {
  return fetch(BASE_URL + "collection/" + collectionId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Listings not found.");
  });
}

// get all listings of a certain album
function getListingsByAlbumId(albumId) {
  return fetch(BASE_URL + "album/" + albumId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Can't find listings for this album.");
  });
}

function getListingById(listingId) {
  return fetch(BASE_URL + listingId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Can't find this listing.");
  });
}

function updateListing(listingId, update) {
  return fetch(BASE_URL + listingId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Can't find this listing.");
  });
}

function deleteListing(listingId) {
  return fetch(BASE_URL + listingId, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Can't find this listing.");
  });
}

//-------------------------------helpers-------------------------------//

// get logged in user's id:
function loggedInUser() {
  return userService.getUser()._id;
}

// get collection id from user id:
function collectionId(userId) {
  return collection.get(userId).then((collection) => {
    return collection[0]._id;
  });
}

const exports = {
  createListing,
  getListingsbyLoggedInUser,
  getListingsbyUser,
  getListingsByCollection,
  getListingsByAlbumId,
  getListingById,
  updateListing,
  deleteListing,
};

export default exports;

//-------------------------------test code-------------------------------//

// // test code for above:
// let listing = {
//   albumId: "140140",
//   title: "It's a Kind of Magic",
//   format: "LP",
//   condition: "Poor",
//   price: 0.99,
//   description: "Scratched to death!",
// };
// let col5 = "634be9ee39b0ef6ace03d94e";
// let user5 = "634be9ee39b0ef6ace03d94c";

// function run() {
//   return createListing(listing, col5).then((result) => {
//     console.log("run() createListing result: ", result);
//   });
// }
// run();

// async function run() {
//   const result = await getListingsByAlbumId("140140");
//   console.log("result: ", result);
// }
// run();

// async function run() {
//   const result = await getListingById("634a9c7d1f1478cf86fad978");
//   console.log("result: ", result);
// }
// run();

// async function run() {
//   const listingId = "634a153672eeec7058a70903";
//   const update = { condition: "Fair", price: 1.61 };
//   const result = await updateListing(listingId, update);
//   console.log("result: ", result);
// }
// run();

// async function run() {
//   const result = await deleteListing("check database for an id to use here");
//   console.log("result: ", result);
// }
// run();
