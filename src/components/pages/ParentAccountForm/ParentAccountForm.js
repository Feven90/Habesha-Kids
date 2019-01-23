import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import autheRequest from '../../../helpers/data/autheRequests';

import './CreateParentAccount.scss';
import postUser from '../../../helpers/data/parentInformation';

const parentInformation= {
  email: '',
  password: '',
  name: '',
  uid: ''
};

class ParentAccountForm extends React.Component {

state = {
  newParentInformation: parentInformation,
}

  login = (e) => {
    e.preventDefault();
    this.props.authenticateUser(e, this.state.newParentInformation.email, this.state.newParentInformation.password);
  }
  
  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.newParentInformation };
    // spread operator, making a copy of state, just for caution if we
    // modify here we don't want it to be modified in state too.
    tempInfo[name] = e.target.value;
    this.setState({ newParentInformation: tempInfo});
  }
  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  emailChange = (e) => {
    this.formFieldStringState('email', e);
  }
  passwordChange = (e) => {
    this.formFieldStringState('password', e);
  }
  
  createAccount = (e) => {
    e.preventDefault();
    this.props.signUp( this.state.newParentInformation.email, this.state.newParentInformation.password)
    // firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //   console.log(user.uid);
  //   const uid = user.uid;
  //   this.setState({ uid})
  //     }
  //   })
  //    postUser.postRequest(this.state);
    
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { signUp } = this.props;
    const userInformation = { ...this.state.newParentInformation };
    // userInformation.uid = autheRequest.getCurrentUid();
    console.log(userInformation.email);
    signUp(userInformation.email, userInformation.password);
    this.setState({ newParentInformation:parentInformation })
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render () {
    const { newParentInformation } = this.state;
    return (
      <div className='col'>
      <form>
      <div className="form-group">
          <label>Name</label>
          <input type="text" name='parentName' value={newParentInformation.name} className="form-control" onChange={this.nameChange} id="parent-name" placeholder="Feven"></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" name='email' value={newParentInformation.email} className="form-control" onChange={this.emailChange} id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name='password' value={newParentInformation.password} className="form-control" onChange={this.passwordChange} id="password" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.login}>Log In</button>
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.formSubmit}>Sign Up</button>
      </form>
    </div>
    );
  }
}



export default ParentAccountForm;
