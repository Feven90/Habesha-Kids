import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import autheRequest from '../../../helpers/data/autheRequests';

import './CreateParentAccount.scss';
import postUser from '../../../helpers/data/parentInformation';

class ParentAccountForm extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    uid: ''
}

  login = (e) => {
    e.preventDefault();
    this.props.authenticateUser(e, this.state.email, this.state.password);
  }
  
  createAccount = (e) => {
    e.preventDefault();
    this.props.signUp( this.state.email, this.state.password)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
    console.log(user.uid);
    const uid = user.uid;
    this.setState({ uid})
      }
    })
     postUser.postRequest(this.state);
    
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render () {
    return (
      <div className='col'>
      <form>
      <div className="form-group">
          <label>Name</label>
          <input type="text" name='parentName' value={this.parentName} className="form-control" onChange={this.change} id="parent-name" placeholder="Feven"></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" name='email' value={this.email} className="form-control" onChange={this.change} id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name='password' value={this.password} className="form-control" onChange={this.change} id="password" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.login}>Log In</button>
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.createAccount}>Sign Up</button>
      </form>
    </div>
    );
  }
}



export default ParentAccountForm;
