import React from 'react';
import 'firebase/auth';

import './KidsRegistrationForm.scss';

const kidInformation= {
  name: '',
  age: ''
};

class KidRegistrationForm extends React.Component {

state = {
  newKidInformation: kidInformation,
}

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.newKidInformation };
    tempInfo[name] = e.target.value;
    this.setState({ newKidInformation: tempInfo});
  }
  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  ageChange = (e) => {
    this.formFieldStringState('age', e);
  }

  formSubmit = (e) => {
    e.preventDefault();
    const { SaveChildForm  } = this.props;
    const kidInformation = { ...this.state.newKidInformation };
    SaveChildForm (this.state.newKidInformation);
    this.setState({ newKidInformation:kidInformation })
  }

  render () {
    const { newKidInformation } = this.state;
    return (
      <div className='col'>
      <form>
      <div className="form-group">
          <label>Name</label>
          <input type="text" name='kidName' value={newKidInformation.name} className="form-control" onChange={this.nameChange} id="kid-name" placeholder="Feven"></input>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name='age' value={newKidInformation.age} className="form-control" onChange={this.ageChange} id="kid-age" aria-describedby="ageHelp" placeholder="2"></input>
        </div>
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.formSubmit}>Save</button>
      </form>
    </div>
    );
  }
}



export default KidRegistrationForm;
