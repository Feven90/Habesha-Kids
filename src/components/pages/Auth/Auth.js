
import React from 'react';
import './Auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import ParentLogin from '../ParentLogin/ParentLogin';


class Auth extends React.Component {

  authenticateUser = (e, email, password) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      this.props.history.push('/profile');
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
        <div className="Auth">
          <ParentLogin authenticateUser={this.authenticateUser} />
        </div>
    );
  }
}

export default Auth;