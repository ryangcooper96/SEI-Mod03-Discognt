const BASE_URL = "http://localhost:3001/api/discogs/";

// takes the album id, returns album object
function getAlbumById(albumId) {
  return fetch(BASE_URL + "releases/" + albumId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Album not found.");
  });
}

// takes the artist id, returns artist object
function getArtistById(artistId) {
  return fetch(BASE_URL + "artists/" + artistId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Artist not found.");
  });
}

// takes the artist id,
// returns first page of 50 hits in this format:
//
// {
//  pagination: {pagination data plus URLs to previous and next pages of 50 hits},
//  releases: [{album1}, {album2}, {...}]
// }
//
// releases have 2 types, master and release, their data structure is slightly different.
function getReleasesByArtistId(artistId) {
  return fetch(BASE_URL + "artists/" + artistId + "/releases", {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Artist's albums not found.");
  });
}

// takes search query string, empty string returns the first 50 artists it finds in the database
function searchForArtists(query) {
  return fetch(BASE_URL + "search/artists/?query=" + query, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Artist not found.");
  });
}

// takes search query string, empty string returns the first 50 albums it finds in the database
function searchForReleases(query) {
  return fetch(BASE_URL + "search/releases/?query=" + query, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Albums not found.");
  });
}

const exports = {
  getAlbumById,
  getArtistById,
  getReleasesByArtistId,
  searchForArtists,
  searchForReleases,
};

export default exports;

/* :----------------------------------------------- to test in terminal:----------------------------------------------- */
// copypaste one of these in place of the <paste function here>:
// getAlbumById(5073915) || getArtistById(140140) || getReleasesByArtistId(140140) || searchForArtists("oasis") || searchForReleases("definitely maybe")
// in terminal cd into the folder of this file
// and run: node discogsService.js
// test code:

// async function run() {
//   console.log(
//     "this is the response: ",
//     await <paste function here>
//   );
// }

// run();
