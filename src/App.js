import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Details from './components/Details';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { getTrendingMovies, getTopRatedMovies, getActionMovies, getComedyMovies, getHorrorMovies, getRomanceMovies } from './api';

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        setTrendingMovies(await getTrendingMovies());
        setTopRatedMovies(await getTopRatedMovies());
        setActionMovies(await getActionMovies());
        setComedyMovies(await getComedyMovies());
        setHorrorMovies(await getHorrorMovies());
        setRomanceMovies(await getRomanceMovies());
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const allMovies = [...trendingMovies, ...topRatedMovies, ...actionMovies, ...comedyMovies, ...horrorMovies, ...romanceMovies];
    const results = allMovies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              
                <Hero />
                {searchQuery === '' ? (
                  <>
                    <Row title="Trending Now" movies={trendingMovies} />
                    <Row title="Top Rated Movies" movies={topRatedMovies} />
                    <Row title="Action Movies" movies={actionMovies} />
                    <Row title="Comedy Movies" movies={comedyMovies} />
                    <Row title="Horror Movies" movies={horrorMovies} />
                    <Row title="Romance Movies" movies={romanceMovies} />
                  </>
                ) : (
                  <Row title="Search Results" movies={searchResults} />
                )}
              
            </ProtectedRoute>
          } />
          <Route path="/details/:id" element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
