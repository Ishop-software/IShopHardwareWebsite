import React, { useState } from 'react';

const HomePage = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (query) {
      console.log('Searching for:', query);
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <section id="home" className="section">
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search.."
            value={query}
            onChange={handleSearchChange}
          />
          <button className='mainbutton' type="submit">Search</button>
          
        </form>
        <p>we are the</p>
        <h1 className='para'>BEST HARDWARE COMPANY</h1>
          <h1 className='para'>IN GLOBAL COMMUNITY
        </h1>
        <p>write paragraph here</p>
        <button className='button1' type='submit'>Shop now</button>
        <button className='button2' type='submit'>Explore More</button>
      </div>
    </section>
  );
};

export default HomePage;
