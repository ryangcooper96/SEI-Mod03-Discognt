import db from "../helpers/discogs.js";

// takes the album id, returns album object
export async function getAlbumById(req, res, next) {
  try {
    const { id } = req.params;
    const album = await db.getRelease(id);

    if (album) {
      res.json(album);
    } else {
      res.json({ error: true, message: "Album not found." });
    }
  } catch (error) {
    next(error);
  }
}

// takes the artist id, returns artist object
export async function getArtistById(req, res, next) {
  try {
    const { id } = req.params;
    const artist = await db.getArtist(id);
    if (artist) {
      res.json(artist);
    } else {
      res.json({ error: true, message: "Artist not found." });
    }
  } catch (error) {
    next(error);
  }
}

// takes the artist id,
// returns first page of 50 hits in this format:
//
// {
//  pagination: {pagination data plus URLs to previous and next pages of 50 hits},
//  releases: [{album1}, {album2}, {...}]
// }
//
export async function getReleasesByArtistId(req, res, next) {
  try {
    const { id } = req.params;
    const releases = await db.getArtistReleases(id);
    if (releases) {
      res.json(releases);
      console.log(releases.releases);
    } else {
      res.json({ error: true, message: "Albums not found." });
    }
  } catch (error) {
    next(error);
  }
}

// takes search query string, empty string returns empty array
export async function searchForArtists(req, res, next) {
  try {
    const { query } = req.query;
    const artists = await db.search(query);
    if (artists) {
      res.json(
        artists.results.filter((item) => {
          return item.type === "artist";
        })
      );
    } else {
      res.json({ error: true, message: "Artist not found." });
    }
  } catch (error) {
    next(error);
  }
}

// takes search query string, empty string returns empty array
export async function searchForReleases(req, res, next) {
  try {
    const { query } = req.query;
    const releases = await db.search(query);
    if (releases) {
      res.json(
        releases.results.filter((item) => {
          return item.type === "release";
        })
      );
    } else {
      res.json({ error: true, message: "Album not found." });
    }
  } catch (error) {
    next(error);
  }
}

// searchForGenres();

// // for pagination later:
// // /api/search/:query/:page
// // takes a search query and a page number
// // currently returns artists, labels, masters, releases
// export async function searchForArtists(req, res, next) {
//   try {
//     const { query, page } = req.query;
//     const result = await db.search(query, { page });
//     if (result) {
//       res.json(result);
//     } else {
//       res.json({ error: true, message: "Artist not found." });
//     }
//   } catch (error) {
//     next(error);
//   }
// }
