import db from "../helpers/discogs.js";

export async function getAlbumById(req, res, next) {
  try {
    const { id } = req.params;
    const album = await db.getRelease(id);
    if (album) {
      res.json(album);
      // console.log("album title: ", album.title);
      // console.log("album object keys: ", Object.keys(album));
    } else {
      res.json({ error: true, message: "Album not found." });
    }
  } catch (error) {
    next(error);
  }
}

export async function getArtistById(req, res, next) {
  try {
    const { id } = req.params;
    const artist = await db.getArtist(id);
    if (artist) {
      res.json(artist);
      // console.log("artist's name: ", artist.name);
      // console.log("artist object's keys: ", Object.keys(artist));
    } else {
      res.json({ error: true, message: "Artist not found." });
    }
  } catch (error) {
    next(error);
  }
}

export async function getReleasesByArtistId(req, res, next) {
  try {
    const { id } = req.params;
    const {
      sort = "year",
      sort_order = "asc",
      page = 1,
      per_page = 50,
    } = req.query;
    const releases = await db.getArtistReleases(id, {
      sort,
      sort_order,
      page,
      per_page,
    });
    if (releases) {
      res.json(releases);
      // console.log(
      //   "albums titles: ",
      //   releases.releases.map((item) => {
      //     return item.title;
      //   })
      // );
    } else {
      res.json({ error: true, message: "Albums not found." });
    }
  } catch (error) {
    next(error);
  }
}

export async function searchDatabase(req, res, next) {
  try {
    const {
      query,
      type,
      title,
      release_title,
      artist,
      label,
      genre,
      style,
      country,
      year,
      format,
      track,
      page = 1,
      per_page = 50,
    } = req.query;
    const results = await db.search({
      query,
      type,
      title,
      release_title,
      artist,
      label,
      genre,
      style,
      country,
      year,
      format,
      track,
      page,
      per_page,
    });
    if (results) {
      res.json(results);
      // console.log(results.results);
      console.log(
        results.results.map((item) => {
          return item.title;
        })
      );
    } else {
      res.json({ error: true, message: "Not found." });
    }
  } catch (error) {
    next(error);
  }
}
