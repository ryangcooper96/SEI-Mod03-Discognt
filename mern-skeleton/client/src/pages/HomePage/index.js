import FeaturedAlbums from "../../components/FeaturedAlbums/FeaturedAlbums";
import Search from "../../components/Search/Search";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="Home">
      <div className="Home-heroWrapper">
        <div>
          {/* <Search /> */}
          <FeaturedAlbums />
        </div>
      </div>
      <div className="Home-welcome">
        <h1>Welcome</h1>
        <p>
          Explore the world of music with our endless database, buy and sell
          with our marketplace.
        </p>
      </div>
    </div>
  );
}
