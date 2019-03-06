import axios from 'axios';
import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../constants';

const receiveMovies = (movies) => ({
  type: RECEIVE_ALBUMS,
  albums,
});

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  album,
});


//CHEQUEAR URLS CON PLEDU --- IMPORTANTE!!!!

export const fetchMovies = () => dispatch =>
  axios.get('/api/movies')
    .then(res => res.data)
    .then(albums => dispatch(receiveAlbums(albums)));

export const fetchMovies = id => dispatch =>
  axios.get(`/api/movies/${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));