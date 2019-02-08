import React from 'react';
import 'firebase/auth';

import './KidsRegistrationForm.scss';
import kidRequest from '../../../helpers/data/kidRequest';

const kidInformation= {
  name: '',
  age: '',
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

componentDidUpdate(prevProps) {
  const { isEditing, editId } = this.props;
  if (prevProps !== this.props && isEditing) {
    kidRequest.getSingleKid(editId)
      .then((kid) => {
        this.setState({ newKidInformation: kid.data });
      })
      .catch(err => console.error('error with getSingleListing', err));
  }
}
  render () {
    const { newKidInformation } = this.state;
    const { isEditing } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Kid:</h2>;
      }
      return <h2>Add New Kid:</h2>;
    };
    return (
      <div className=''>
      {title()}
      <form className="kids-form"> 
      <div className="form-group">
          <label>Name</label>
          <input type="text" name='kidName' value={newKidInformation.name} className="form-control kid-name" onChange={this.nameChange} id="kid-name" placeholder="name"></input>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name='age' value={newKidInformation.age} className="form-control kid-age" onChange={this.ageChange} id="kid-age" aria-describedby="ageHelp" placeholder="2"></input>
        </div>
        <button type="submit" className="btn btn-primary" autoComplete="current-password" onClick={this.formSubmit}>Save</button>
      </form>
    </div>
    );
  }
}

export default KidRegistrationForm;
