import React from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import postUser from '../../../helpers/data/parentInformation';
import autheRequests from '../../../helpers/data/autheRequests';

// import './ParentRegistrationForm.scss';

const parentInformation= {
  email: '',
  password: '',
  name: '',
  uid: ''
};

class ParentRegistrationForm extends React.Component {

state = {
  newParentInformation: parentInformation,
}

signUp = ( newParentInformation) => {
  firebase.auth().createUserWithEmailAndPassword(newParentInformation.email, newParentInformation.password).then((res) => {
    newParentInformation.uid = autheRequests.getCurrentUid();
    const partOfParentInfo = { name: newParentInformation.name,
                      email: newParentInformation.email,
                      uid: newParentInformation.uid
                      }
    postUser.postRequest(partOfParentInfo);
    this.props.history.push('/profile');
  }).catch(err => console.error('there was an error with auth', err));
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

  formSubmit = (e) => {
    e.preventDefault();
    const userInformation = { ...this.state.newParentInformation };
    console.log(userInformation.uid);
    this.signUp(this.state.newParentInformation);
    this.setState({ newParentInformation:parentInformation });
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
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.formSubmit}>Sign Up</button>
      </form>
    </div>
    );
  }
}



export default ParentRegistrationForm;
