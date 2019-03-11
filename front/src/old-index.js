import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../src/components/Main';


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('app')
  );



  