import FeaturedAlbums from "../../components/FeaturedAlbums/FeaturedAlbums";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="Home">
      <div className="Home-welcome">
        <h1 className="Home-welcomeTitle">Welcome</h1>
        <p className="Home-welcomeText">
          Explore the world of music with our endless database, buy and sell
          with our marketplace.
        </p>
      </div>
      <div>
        <FeaturedAlbums />
      </div>
    </div>
  );
}
