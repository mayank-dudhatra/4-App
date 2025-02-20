import React, { useEffect, useState } from 'react';
import './Potter.css';

function Potter() {
  const [potter, setPotter] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(false); // Loading state
  const [endpoint, setEndpoint] = useState(''); // Selected API endpoint
  const BaseUrl = 'https://potterapi-fedeperin.vercel.app/en'; // API Base URL

  // Fetch data whenever endpoint changes
  useEffect(() => {
    if (!endpoint) return; // Skip if no endpoint is selected

    setLoading(true); // Set loading to true before fetching
    fetch(`${BaseUrl}/${endpoint}`)
      .then((response) => {
        console.log('Response:', response); // Debugging: log response
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse response as JSON
      })
      .then((data) => {
         
        setPotter(data || []); // Set the fetched data
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
        
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch
      });
  }, [endpoint]);

  return (
    <>
      {/* Header Section */}
      <div className="potter-head">
        <h2 className="potter-heading">
          Welcome to Hogwarts School of Witchcraft and Wizardry
        </h2>
        <h3 className="potter-title">What would you like to explore?</h3>
      </div>

      {/* Buttons to set endpoints */}
      <div className="potter-options">
        <button className="character-button" onClick={() => setEndpoint('characters')}>
          View Characters
        </button>
        <button className="spell-button" onClick={() => setEndpoint('spells')}>
          View Spells
        </button>
        <button className="house-button" onClick={() => setEndpoint('houses')}>
          View Houses
        </button>
        <button className="book-button" onClick={() => setEndpoint('books')}>
          View Books
        </button>
      </div>

      {/* Loader */}
      {loading && <div className="loading-spinner"></div>}

      {/* Display Data */}
      {!loading && potter.length > 0 && 
        <div className="potter-data">
          {potter.map((data, index) => (
            <div key={index} className="potter-item">
              {/* Common Image */}
              {data.image && <img src={data.image} alt={data.name || 'Unnamed'} className="potter-image" />}

              {/* Books */}
              {endpoint === 'books' && (
                <>
                  {data.cover && <img src={data.cover} alt="Book Cover" className="potter-book-cover" />}
                  {data.title && <h3>Title: {data.title}</h3>}
                  {data.originalTitle && <p>Original Title: {data.originalTitle}</p>}
                  {data.releaseDate && <p>Release Date: {data.releaseDate}</p>}
                  {data.description && <p>Description: {data.description}</p>}
                </>
              )}

              {/* Characters */}
              {endpoint === 'characters' && (
                <>
                  {data.fullName && <h3>Name: {data.fullName}</h3>}
                  {data.hogwartsHouse && <p>House: {data.hogwartsHouse}</p>}
                  {data.interpretedBy && <p>Actor: {data.interpretedBy}</p>}
                  {data.birthdate && <p>Birthdate: {data.birthdate}</p>}
                </>
              )}

              {/* Spells */}
              {endpoint === 'spells' && (
                <>
                  {data.spell && <p>Spell: {data.spell}</p>}
                  {data.use && <p>Use: {data.use}</p>}
                </>
              )}

              {/* Houses */}
              {endpoint === 'houses' && (
                <>
                  {data.house && <p>House: {data.house}</p>}
                  {data.emoji && <p>Emoji: {data.emoji}</p>}
                  {data.founder && <p>Founder: {data.founder}</p>}
                </>
              )}
            </div>
          ))}
        </div>
      }

  
    </>
  );
}

export default Potter;
