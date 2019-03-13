import React from 'react'
import { connect } from 'react-redux'


class Login extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
      const val = e.target.value
      this.setState({ input: val })
      console.log(this.state.input)
    }


    render() {
      return (<div>
        <h1>OMDB</h1>
        <strong>LOGIN</strong>
        <div>
          {console.log(this.props)}
          <form method="POST" action="/users/login">
            <input placeholder="Email" onChange={this.handleChange} name="email" />
            <input placeholder="Password" name="password" />
            <button onSubmit={console.log(this.props)}>SUBMIT</button>
          </form>
        </div>
      </div>)
    }
  }


const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  searchMovie: (movieID) => dispatch(oneMovie(movieID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
