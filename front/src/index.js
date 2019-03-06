// el inicio de la app
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../src/components/Main';
import { Provider } from 'react-redux'
import store from '../src/redux/store'



ReactDOM.render(
      <Main />,
    document.getElementById('app')
  );



  