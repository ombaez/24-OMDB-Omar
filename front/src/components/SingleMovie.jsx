import React from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import { oneMovie, receiveMovie } from '../redux/action-creators/action-creator'
import { connect } from 'react-redux'

class SingleMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMovie: {},
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmitMovies = this.handleSubmitMovies.bind(this)
    }

    handleSubmitMovies(imbdID) {
        axios.post('/favourites', {
            movies: [imbdID]
        })
            .then(data => data)
    }

    handleClick() {
        this.handleSubmitMovies(this.props.selected.imdbID)
        console.log(this.props.selected.imdbID)
    }

    componentDidMount() {
        this.setState({ selectedMovie: this.props.searchMovie(this.props.movieID) })
        console.log(this.state.selectedMovie, '================')
    }

    render() {
        const selectedMovie = this.props.selected
        return (<div>
            <button onClick={this.handleClick} > Add to Favourites </button>
            <div className='container'>
                <div className='row'>
                    <div key={selectedMovie.imdbID} >
                        <img src={selectedMovie.Poster} />
                        <div>
                            <h5>
                                <span className='muestra'> {'Title : ' + selectedMovie.Title}</span>
                                <div className='muestra'> {'Year : ' + selectedMovie.Year}</div>
                                <div className='muestra'> {'Actors : ' + selectedMovie.Actors}</div>
                                {selectedMovie.Ratings && selectedMovie.Ratings.length > 0 ? selectedMovie.Ratings.map((rating, index = 0) => (<li className='muestra'
                                    key={index++}>{rating.Source}  :     {rating.Value}</li>)) : <div>Loading Movie</div>}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}


const mapStateToProps = (state) => ({
    selected: state.selected,
});
const mapDispatchToProps = (dispatch) => ({
    searchMovie: (movieID) => dispatch(oneMovie(movieID))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);

