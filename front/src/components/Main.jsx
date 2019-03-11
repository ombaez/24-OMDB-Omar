import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SearchInput from '../containers/SearchInput';
import NavBar from './NavBar'
import SingleMovie from './SingleMovie'
import store from 'react-redux'
import UserReg from './UserReg';
import Login from './Login';
import Register from './Register'
import FavouriteMovies from '../containers/FavouritesMovies'

export default class Main extends React.Component {
  render() {
    return (
      <div id='main' className='container-fluid'>
     <Switch>
       <Route exact path={'/'} render = {()=> (<SearchInput/>)}/>
       <Route exact path={'/movies/:id'} render={({match}) => (<SingleMovie movieID={match.params.id}/>)}/>
       <Route exact path={'/users'} render={()=>(<UserReg/>)}/>
       <Route exact path={"/userReg/login"} render={()=>(<Login/>)}/>
       <Route exact path={"/userReg/register"} render={()=>(<Register/>)}/>
       <Route exact path={'/favourites'} render = {()=> (<FavouriteMovies/>)}/>
     </Switch>
      </div>
    )
  }
}























