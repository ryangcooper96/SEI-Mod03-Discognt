import disconnect from "disconnect";
import dotenv from "dotenv";

dotenv.config();
console.log(dotenv.config());

const Discogs = disconnect.Client;
const db = new Discogs({
  consumerKey: process.env.DISCOG_KEY,
  consumerSecret: process.env.DISCOG_SECRET,
}).database();

export default db;
