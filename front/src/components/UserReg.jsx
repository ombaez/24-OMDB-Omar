import React from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
export default class UserReg extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (

      <div>
        <Link to="/userReg">
          <h1>Login - Register</h1>
        </Link>
        <Link to="/userReg/login"><div>LOGIN</div></Link>
        <Link to="/userReg/register"><div>REGISTER</div></Link>
        <form method="POST" action="/logout">
          <button>LogOut</button>
        </form>

      </div>
    )
  }
}