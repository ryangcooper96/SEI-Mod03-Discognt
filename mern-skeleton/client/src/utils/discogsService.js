const BASE_URL = "http://localhost:3000/api/discogs/";

// required parameter: album id (number), returns album object
function getAlbumById(albumId) {
  return fetch(BASE_URL + "releases/" + albumId, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Album not found.");
  });
}

// required parameter: artist id (number), returns artist object
function getArtistById(artistId) {
  return fetch(BASE_URL + "artists/" + artistId, {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Clear-Site-Data": "*",
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Artist not found.");
  });
}

// required parameter: artist id (number)
//
// optional parameters (in one object):
// searchArgs = {
// sort: "year" || "title" || "format"
// sort_order: "asc" || "desc"
// page: Number || 1,
// per_page: Number || 50, (100 max)
// }
//
// results returned in this format:
// {
//  pagination: {pagination data},
//  releases: [{album1}, {album2}, {...}]
// }
// function getReleasesByArtistId(artistId, searchArgs) {
//   let query = new URLSearchParams(searchArgs).toString();
//   return fetch(BASE_URL + "artists/" + artistId + "/releases?" + query, {
//     method: "GET",
//   }).then((res) => {
//     if (res.ok) return res.json();
//     throw new Error("Artist's albums not found.");
//   });
// }

// all parameters optional (incl. query), in one object:
// searchArgs = {
// query: ""
// type: "release" || "master" || "artist" || "label"
// title: ""
// release_title: ""
// artist: ""
// label: ""
// genre: ""
// style: ""
// country: ""
// year: ""
// format: ""
// track: ""
// page: Number || 1,
// per_page: Number || 50, (100 max)
//
// }
// results returned in this format:
// {
//  pagination: {pagination data},
//  results: [{result1}, {result2}, {...}]
// }
function searchDatabase(searchArgs) {
  let query = new URLSearchParams(searchArgs).toString();
  return fetch(BASE_URL + "search/database?" + query, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Not found.");
  });
}

const exports = {
  getAlbumById,
  getArtistById,
  // getReleasesByArtistId,
  searchDatabase,
};

export default exports;

/* :----------------------------------------------- test code ----------------------------------------------- */

// async function run() {
//   const result = await getAlbumById(5073915);
//   //   console.log("this is the result: ", result);
//   console.log("album title: ", result.title);
//   console.log("album object keys: ", Object.keys(result));
// }
// run();

// async function run() {
//   const result = await getArtistById(140140);
//   //   console.log("this is the result: ", result);
//   console.log("artist's name: ", result.name);
//   console.log("artist object's keys: ", Object.keys(result));
// }
// run();

// let searchArgs = {
//   sort: "year",
//   sort_order: "desc",
//   page: 1,
//   per_page: 6,
// };
// async function run() {
//   const result = await getReleasesByArtistId(140140, searchArgs);
//   //   console.log("this is the result: ", result);
//   console.log(
//     "album titles by this artist: ",
//     result.releases.map((item) => {
//       return item.year;
//     })
//   );
// }
// run();

// let searchArgs = {
//   query: "leppard",
//   type: "release",
//   genre: "rock",
//   per_page: 2,
// };
// async function run() {
//   const result = await searchDatabase(searchArgs);
//   //   console.log("this is the result: ", result);
//   console.log(
//     "search results (titles): ",
//     result.results.map((item) => {
//       return item.title;
//     })
//   );
// }
// run();
