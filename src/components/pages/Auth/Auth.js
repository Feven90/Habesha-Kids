
import React from 'react';
import postUser from '../../../helpers/data/parentInformation';
import './Auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import ParentAccountForm from '../ParentAccountForm/ParentAccountForm';
import autheRequests from '../../../helpers/data/autheRequests';

class Auth extends React.Component {

  authenticateUser = (e, email, password) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      this.props.history.push('/home');
    }).catch(err => console.error('there was an error with auth', err));
  }
  signUp = ( newParentInformation) => {
    firebase.auth().createUserWithEmailAndPassword(newParentInformation.email, newParentInformation.password).then((res) => {
      newParentInformation.uid = autheRequests.getCurrentUid();
      const partOfParentInfo = { name: newParentInformation.name,
                        email: newParentInformation.email,
                        udi: newParentInformation.uid
                        }
      postUser.postRequest(partOfParentInfo);
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