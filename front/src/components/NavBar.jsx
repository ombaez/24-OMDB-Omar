import React from 'react'
import { Route, Redirect, Switch, Link } from 'react-router-dom';


export default ({handleChange, onSubmit, receiveSearchTitle}) =>{
return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <a className="navbar-brand" href="#">OMDB</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/'>Home <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                onChange={handleChange} 
                placeholder="Search" 
                aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>)}