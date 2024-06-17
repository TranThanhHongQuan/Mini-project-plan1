
import './Banner.css';

const Banner = ({ movie }) => {
  const { release_date } = movie;

  return (
    <div className="banner">
      <h1>Hitman's Wife's
          Bodyguard</h1>
      <p className="banner-date">Releasing {release_date}</p>
      <button className="triangle-button">
      ▶ Watch the trailer 
      </button>
    </div>
  );
};

export default Banner;
