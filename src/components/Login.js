import React from "react";
import { withRouter} from "react-router";
import config from "../Firebase";


class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  Login = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    config
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then( () => {
        let path = `Create`;
        this.props.history.push(path);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.Login}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="submit"
            value="Login"
            className="btn"
          />
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
