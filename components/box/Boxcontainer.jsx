// Boxcontainer.js
import { useEffect, useState } from 'react';
import Pagination from '../pagination/pagination';
import axios from 'axios';
import './Boxcontainer.css';
import { CiStar } from "react-icons/ci";
import Navbar from '../navebar/navbar';

export default function Boxcontainer() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 0; // Number of items to display per page

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}&with_genres=28`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchData();
  }, [currentPage, apiKey]);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Reset current page to 1 when performing a new search
    setCurrentPage(1);
  };

  const filteredMovies = searchQuery
    ? movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : movies;

  const data = filteredMovies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    rate: movie.vote_average,
    genres: movie.genre_ids.map((genre) => {
      // Map genre ids to genre names
      const genreMap = {
        28: 'Action',
        12: 'Adventure',
        14: 'Fantasy',
        16: 'Animation',
        18: 'Drama',
        27: 'Horror',
        35: 'Comedy',
        36: 'History',
        37: 'Western',
        53: 'Thriller',
        80: 'Crime',
        99: 'Documentary',
        878: 'Science Fiction',
        9648: 'Mystery',
        10402: 'Music',
        10749: 'Romance',
        10751: 'Family',
        10752: 'War',
        10770: 'TV Movie',
          
      };
      return genreMap[genre];
    }),
  }));

  return (
    <>
      {/* Pass the handleSearch function to the Navbar component */}
      <Navbar onSearch={handleSearch} />
      <div className='box'>
        {data.map((item) => (
          <div key={item.id} className="Box__item">
            <img src={item.img} alt={item.title} />
            <div className="Box__item__info">
              <span className="rate">{item.rate.toFixed(1)}<CiStar /></span>
              <div className="detailes">
                <h4>{item.title}</h4>
                <p>{item.overview}</p>
                <span>{item.genres.join(' / ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </>
  );
}
