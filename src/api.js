import axios from 'axios';

const API_KEY = 'abcdefg1234567'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getTrendingMovies = () => fetchData('/trending/movie/week');
export const getTopRatedMovies = () => fetchData('/movie/top_rated');
export const getActionMovies = () => fetchData('/discover/movie?with_genres=28');
export const getComedyMovies = () => fetchData('/discover/movie?with_genres=35');
export const getHorrorMovies = () => fetchData('/discover/movie?with_genres=27');
export const getRomanceMovies = () => fetchData('/discover/movie?with_genres=10749');