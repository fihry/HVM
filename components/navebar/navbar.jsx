// Date: 2021/8/8
import './navebar.css';
import { Link } from 'react-router-dom';
import Serchform from './serchform.jsx';
export default function Navbar() {


  return (
    <div className='header'>
      <nav>
        <div className="logo">HVM</div>
        <ul id='menu'>
          <li className='active'>Home
          </li>
          <li>Movies
            <ol>
              <li><Link to="/Movies/Action">Action</Link></li>
              <li><Link to="/Movies/Comedy">Comedy</Link></li>
              <li><Link to="/Movies/Drama">Drama</Link></li>
              <li><Link to="/Movies/Horror">Horror</Link></li>
              <li><Link to="/Movies/Thriller">Thriller</Link></li>
            </ol>
          </li>
          <li>Series
            <ol>
              <li><Link to="/Series/Drama">Drama </Link></li>
              <li><Link to="/Series/Comedy">Comedy </Link></li>
              <li><Link to="/Series/Thriller">Thriller </Link></li>
              <li><Link to="/Series/Romance">Romance </Link></li>
            </ol>
          </li>
          <li>Anime
            <ol>
              <li><Link to="/Anime/Shounen">Shounen</Link></li>
              <li><Link to="/Anime/Shoujo">Shoujo</Link></li>
              <li><Link to="/Anime/Seinen"></Link></li>
              <li><Link to="/Anime/Horror">Horror</Link></li>
              <li><Link to="/Anime/Sports">Sports</Link></li>
              <li><Link to="/Anime/Mystery">Mystery</Link></li>
            </ol>
          </li>
        </ul>
        <span>
          <button id='login'>login</button>
          <button id='signup'>signup</button>
          <label className="hamburger">
            <input
              type="checkbox"
              name=""
              id="menuToggle"
              onClick={(e) => {
                e.target.checked ? document
                  .getElementById('menu').style.display = 'block'
                : document
                  .getElementById('menu').style.display = 'none'
              }}
            />
            <svg viewBox="0 0 32 32">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </span>
      </nav>
      <Serchform/>
    </div>
  );
  
}

