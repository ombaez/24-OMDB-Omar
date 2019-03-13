import axios from 'axios';
import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_SEARCH, RECEIVE_FAVMOVIES, SET_USER} from '../constants';


export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const receiveFavMovies = () => ({
  type: RECEIVE_FAVMOVIES,
  favmovies,
});

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const receiveSearchTitle = (title) => ({
  type: RECEIVE_SEARCH,
  title,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
})

export const createUser = (user) => ({
  type: CREATE_USER,
  user,
})

export const buscarMovies = input => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${input}`)
    .then(res => res.data.Search)
    .then(movies => dispatch(receiveMovies(movies)))

export const oneMovie = idInput => dispatch =>
  axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${idInput}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)))


    /* TODAS LAS FUNCIONES DEBAJO ESTAN EN DISENIO*/
export const favMovies = () => dispatch => {
  return ({
    favmovies
  })
}

export const setUserinStore = (user) => dispatch =>
  axios.get('/user/login:id')
    .then(data => console.log(data))

export const addUser = (user) => dispatch =>
  axios.post('/user/register',{ user })
    .then(data=>console.log(data) )


