import React from 'react'

const Register = ()=>(
    <div>
    <h1>OMDB</h1>
<strong>Register</strong>

    <div>
      <form method="POST" action="/register">
        <input placeholder="Email" name="email" />
        <input placeholder="Password" name="password" />
        <button>SUBMIT</button> 
      </form>
    </div> 
  </div>
)

export default Register