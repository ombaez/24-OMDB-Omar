import React from 'react'

const Login = ({onSubmit})=>(
    <div>
    <h1>OMDB</h1>
<strong>LOGIN</strong>

    <div>
      <form method="POST" action="/users/login">
        <input placeholder="Email" name="email" />
        <input placeholder="Password" name="password" />
        <button onSubmit={onSubmit}>SUBMIT</button> 
      </form>
    </div> 
  </div>
)

export default Login