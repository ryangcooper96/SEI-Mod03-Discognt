const BASE_URL = "http://localhost:3000/api/discogs/";

let searchParams = new URLSearchParams({
  query: "",
  type: "",
  title: "",
  release_title: "",
  artist: "",
  label: "",
  genre: "",
  style: "",
  country: "",
  year: "",
  format: "",
  track: "",
  sort: null || "year",
  sort_order: null || "asc",
  page: null || 1,
  per_page: null || 50,
});

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
// optional parameters:
// sort: "year" || "title" || "format"
// sort_order: "asc" || "desc"
// page: (number)   //  which page to show
// per_page: (number) // number of search results shown per page

// optional parameters can be set like this (currently):
// searchParams.set("sort_order", "desc");
// searchParams.set("per_page", 10);
//
// results returned in this format:
//
// {
//  pagination: {pagination data},
//  releases: [{album1}, {album2}, {...}]
// }
//
function getReleasesByArtistId(artistId, searchParams) {
  let query = searchParams.toString().replace(/=(?=&|$)/gm, "");
  return fetch(BASE_URL + "artists/" + artistId + "/releases?" + query, {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Artist's albums not found.");
  });
}

// set parameters with searchParams.set, e.g:
// searchParams.set("query", "leppard");
// searchParams.set("type", "release");
// searchParams.set("genre", "rock");
// searchParams.set("per_page", 6);
//
// all parameters optional (incl. query):
// query: (string)
// type: 'release' || 'master' || 'artist' || 'label', (string);
// title: (string)
// release_title: (string)
// artist: (string)
// label: (string)
// genre: (string)
// style: (string)
// country: (string)
// year: (string)
// format: (string)
// track: (string)
// page: (string)
// per_page: (string)
//
// results returned in this format:
// {
//  pagination: {pagination data},
//  results: [{result1}, {result2}, {...}]
// }
function searchDatabase(searchParams) {
  let query = searchParams.toString().replace(/=(?=&|$)/gm, "");
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
  getReleasesByArtistId,
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

// async function run() {
//   const result = await getReleasesByArtistId(140140, searchParams);
//   //   console.log("this is the result: ", result);
//   console.log(
//     "album titles by this artist: ",
//     result.releases.map((item) => {
//       return item.year;
//     })
//   );
// }
// run();

// async function run() {
//   searchParams.set("query", "leppard");
//   searchParams.set("type", "release");
//   searchParams.set("genre", "rock");
//   searchParams.set("per_page", 6);
//   const result = await searchDatabase(searchParams);
//   //   console.log("this is the result: ", result);
//   console.log(
//     "search results (titles): ",
//     result.results.map((item) => {
//       return item.title;
//     })
//   );
// }
// run();
