const BASE_URL = "http://localhost:3001/api/listings/";

function createListing(listing) {
  return fetch(BASE_URL + "new", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(listing),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error.");
  });
}

function getListingsByCollection(collectionId) {
  return fetch(BASE_URL + "collection/" + collectionId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Listings not found.");
  });
}

function getListingsByAlbumId(albumId) {
  return fetch(BASE_URL + "album/" + albumId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Listings not found.");
  });
}

function getListingById(listingId) {
  return fetch(BASE_URL + listingId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Listings not found.");
  });
}

function updateListing(listingId, update) {
  return fetch(BASE_URL + listingId, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Listings not found.");
  });
}

function deleteListing(listingId) {
  return fetch(BASE_URL + listingId, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Listings not found.");
  });
}

const exports = {
  createListing,
  getListingsByCollection,
  getListingsByAlbumId,
  getListingById,
  updateListing,
  deleteListing,
};

export default exports;

/* :----------------------------------------------- test code ----------------------------------------------- */

// let newlisting = {
//   albumId: "140140",
//   title: "nevermind",
//   format: "LP",
//   condition: "Good",
//   price: "3.61",
//   description: "No scratches.",
// };
// async function run() {
//   const result = await createListing(newlisting);
//   console.log(result);
// }
// run();

// async function run() {
//   const result = await getListingsByCollection("634a15b331ccfd8e4d4a3bba");
//   console.log("result: ", result);
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
