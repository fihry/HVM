import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { CiStar } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel() {
  const [settings, setSettings] = useState({
    dots: false,
    speed: 800,
    infinite: true,
    slidesToShow: 3, // Default value
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

  });

  const handleResize = () => {
    const newSettings = { ...settings };

    if (window.innerWidth < 800) {
      newSettings.slidesToShow = 2.35;
      newSettings.slidesToScroll = 1;
    } else if (window.innerWidth > 900) {
      newSettings.slidesToShow = 5;
      newSettings.slidesToScroll = 2;
    }

    setSettings(newSettings);
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=f36218b7272819158f156270a3c47dd2"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
    handleResize(); // Call it once to set the initial settings

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    rate: movie.vote_average,
    genres: movie.genre_ids.map((genre) => {
      if (genre === 28) {
        return "Action";
      } else if (genre === 12) {
        return "Adventure";
      } else if (genre === 16) {
        return "Animation";
      } else if (genre === 35) {
        return "Comedy";
      } else if (genre === 80) {
        return "Crime";
      } else if (genre === 99) {
        return "Documentary";
      } else if (genre === 18) {
        return "Drama";
      } else if (genre === 10751) {
        return "Family";
      } else if (genre === 14) {
        return "Fantasy";
      } else if (genre === 36) {
        return "History";
      } else if (genre === 27) {
        return "Horror";
      } else if (genre === 10402) {
        return "Music";
      } else if (genre === 9648) {
        return "Mystery";
      } else if (genre === 10749) {
        return "Romance";
      } else if (genre === 878) {
        return "Science Fiction";
      } else if (genre === 10770) {
        return "TV Movie";
      } else if (genre === 53) {
        return "Thriller";
      } else if (genre === 10752) {
        return "War";
      } else if (genre === 37) {
        return "Western";
      }
    }),
  }));

  return (
    <div className="carousel__container">
      <h2><CiStar /><CiStar />TOP MOVIES<CiStar /><CiStar /></h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="carousel__item">
            <img src={item.img} alt={item.title} />
            <div className="carousel__item__info">
              <span className="rate">{item.rate.toFixed(1)}</span>
              <div className="detailes">
                <h4>{item.title}</h4>
                <p>{item.overview}</p>
                <span>{item.genres + ""}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
