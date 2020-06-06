import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from "./form.module.css";
import { registerUserAction } from '../actions/authActions';

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };
    // console.log(data);
    this.props.dispatch(registerUserAction(data));
   
  }

  componentDidMount() {
    // document.title = 'Register';
  }

  render() {
    let isSuccess, message;
    
    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <div className={styles.container}>
        <h3 className={styles.heading}>Register Page</h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='login' />}
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
            <button className={styles.formButton}>Register</button>
          </div>
        </div>
        </form>
        Have account? <Link className={styles.link} to='/'>Login here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);