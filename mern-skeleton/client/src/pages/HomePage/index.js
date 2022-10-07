import FeaturedAlbums from "../../components/FeaturedAlbums/FeaturedAlbums";
import Search from "../../components/Search/Search";

import "./HomePage.css"

export default function HomePage() {
  return <div className="home-wrapper">
    <Search />
    <FeaturedAlbums />
  </div>;
}
