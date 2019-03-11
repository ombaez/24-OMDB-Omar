import React from 'react'
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import store from '../redux/store'

export default ({ moviesArr }) => {
    console.log(moviesArr)
    return (
        <div className='container'>
            <div className='row'>
                {moviesArr.map(movie => (
                    <div className='col-lg-4' key={movie.imdbID}>
                        <Link to={`/movies/${movie.imdbID}`}  >
                            <div key={movie.imdbID} >
                                <img src={movie.Poster} />
                                <div>
                                    <h5>
                                        {movie.Title}
                                    </h5>
                                    <small>{movie.Year} </small>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

