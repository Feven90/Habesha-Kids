import React from 'react';
import 'firebase/auth';
import { Link } from 'react-router-dom';

import './ParentLogin.scss';

const parentInformation= {
  email: '',
  password: '',
  name: '',
  uid: ''
};

class ParentLogin extends React.Component {

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
    this.props.signUp( this.state.newParentInformation)
  };

  render () {
    const { newParentInformation } = this.state;
    return (
      <div className='col'>
      <form>
      <div className="form-group">
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
        <Link to={`/CreateAccount`}>Register</Link>

      </form>
    </div>
    );
  }
}



export default ParentLogin;
