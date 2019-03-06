import React from 'react';
import Input from '../containers/SearchInput'
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import axios from 'axios'

export default class Main extends React.Component {

  render() {
    console.log(this.state, '///////////')
    return (
      <div id='main' className='container-fluid'>
        <h1>Bienvenidx!</h1>
        <h3>Busqueda Personalizada</h3>
        <Input />
      </div>
    )
  }
}























