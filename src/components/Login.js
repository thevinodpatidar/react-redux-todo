import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles  from "./form.module.css";
import { loginUserAction } from '../actions/authActions';

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  componentDidMount() {
    // document.title = 'Login';
  }

  render() {
    let isSuccess, message;
    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        localStorage.setItem("token",this.props.response.login.response.token);
      }
    }

    return (
      <div className={styles.container}>
        <h3 className={styles.heading}>Login Page</h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <form onSubmit={this.onHandleLogin}>
        <div>
          <div className={styles.fields}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.fields}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={styles.button}>
            <button className={styles.formButton}>Login</button>
          </div>
        </div>
        </form>
        Don't have account? <Link className={styles.link} to='register'>Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);