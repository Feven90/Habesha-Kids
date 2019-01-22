
import React from 'react';
// import PropTypes from 'prop-types';
// import authRequests from '../../../helpers/data/autheRequests';
// import google from './images/google.png';
import './Auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import ParentAccountForm from '../Account/ParentAccountForm';

class Auth extends React.Component {
  // static propTypes = {
  //   isAuthenticated: PropTypes.func,
  // }


  authenticateUser = (e, email, password) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      // const uid = res.additionalUserInfo.authenticateUser;
      // const user = res.additionalUserInfo.username;
      // this.props.isAuthenticated(uid);
      this.props.history.push('/home');
    }).catch(err => console.error('there was an error with auth', err));
  }
  signUp = (e, email, password) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      this.props.history.push('/home');
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
        <div className="Auth">
          <ParentAccountForm authenticateUser={this.authenticateUser} signUp={this.signUp}/>
        </div>
    );
  }
}

export default Auth;