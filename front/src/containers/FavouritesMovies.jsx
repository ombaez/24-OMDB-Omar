import React from 'react'
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import store from '../redux/store'
import { favMovies } from '../redux/action-creators/action-creator'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { timingSafeEqual } from 'crypto';

class FavouritesMovies extends React.Component {
    constructor() {
        super()
        this.state = {favourites :[]}
    }
componentDidMount(){
    this.setState({ favourites : this.props.favmovies})
}

    render() {
        console.log(this.props.favmovies)
        return (<div>
            <NavBar/>
            {this.props.favmovies && this.props.favmovies.map ((index=0,favmovies)=> (<div key={index++}>{favmovies}</div>))                                   }
            FavouritesMovies
        </div>
        )

    }
}

const mapStateToProps = (state) => ({
    favmovies: state.favmovies,
});
const mapDispatchToProps = (dispatch) => ({
    favMovies: () => dispatch(favMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesMovies);
