import { useEffect, useState } from 'react';
import axios from 'axios';
import './Boxcontainer.css';
import { CiStar } from "react-icons/ci";
export default function Boxcontainer() {
  const [movies, setMovies] = useState([]);
  const  apiKey=import.meta.env.VITE_REACT_APP_API_KEY;

  
  // hororre 'https://api.themoviedb.org/3/discover/movie?api_key=f36218b7272819158f156270a3c47dd2&with_genres=27'
  //'https://api.themoviedb.org/3/discover/movie?api_key=f36218b7272819158f156270a3c47dd2&with_genres=28

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const detailes = {
          MyKey :apiKey,
          Types :{
           type1:"discover/movie",
           type2:"tv/popular",
           type3:"tv/top_rated"
          },
          Page :14,
         };
        const response = await axios.get(
          `https://api.themoviedb.org/3/${detailes.Types.type3}?api_key=${detailes.MyKey}&sort_by=popularity.desc&page=${detailes.Page}&with_genres=28`
        );
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchData();
  }, []);
  const data = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    rate: movie.vote_average,
    genres: movie.genre_ids.map((genre)=>{
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
      return "";
    }),
  }));

  return (
    <div className='box'>
      {data.map((item) => (
         <div key={item.id} className="Box__item">
         <img src={item.img} alt={item.title} />
         <div className="Box__item__info">
           <span className="rate">{item.rate.toFixed(1)}<CiStar/></span>
           <div className="detailes">
             <h4>{item.title}</h4>
             <p>{item.overview}</p>
             <span>{item.genres+""}</span>
           </div>
         </div>
       </div>
      ))}
    </div>

  );
}
