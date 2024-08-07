// src/App.js

import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://example.com/inception.jpg',
      rating: 4.5,
    },
    // Add more initial movies if needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
