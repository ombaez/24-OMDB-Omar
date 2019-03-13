import React from 'react';
import InputSearch from '../components/InputSearch'
import ListItems from '../components/ListItems'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import store from '../redux/reducers/movies-reducer'
import { searchMovies } from '../redux/action-creators/action-creator'
import { receiveSearchTitle } from '../redux/action-creators/action-creator'
import { buscarMovies } from '../redux/action-creators/action-creator'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            result: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

  
    handleChange(e) {
        var val = e.target.value
        this.props.receiveSearchTitle(val)
        this.setState({
            title: val
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.searchMovies(this.props.title)
    }



    render() {
        return (<div>
            <NavBar handleChange={this.handleChange} onSubmit={this.handleSubmit} />
            <ListItems moviesArr={this.props.result} />
        </div>)
    }
}


const mapStateToProps = (state) => ({
    title: state.title,
    result: state.list,
});
const mapDispatchToProps = (dispatch) => ({
    receiveSearchTitle: (input) => dispatch(receiveSearchTitle(input)),
    searchMovies: (movies) => dispatch(buscarMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);


