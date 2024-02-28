// serchform.js
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

export default function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleChange} />
        <button type="submit"><CiSearch /></button>
      </form>
    </div>
  );
}
