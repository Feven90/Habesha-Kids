import React from 'react';
import 'firebase/auth';
import getParentInfo from '../../../helpers/data/parentInformation';
import autheRequests from '../../../helpers/data/autheRequests';
import kidRequest from '../../../helpers/data/kidRequest';
import KidRegistrationForm from '../KidsProfile/KidsRegistrationForm';

class ParentProfile extends React.Component {
  state = {
    profile: [],
    kid: [],
    uid: ''
  }
  componentDidMount() {
    const uid = autheRequests.getCurrentUid();
    console.log(uid);
  getParentInfo.getParentProfile(uid).then((profile) => { 
    console.log(profile);
    this.setState({profile})
  });
}

  SaveChildForm = (newKidInformation) => {
    newKidInformation.uid = autheRequests.getCurrentUid();
    // console.log(uid);
    // newKidInformation = newKidInformation.uid;
    kidRequest.postKidRequest(newKidInformation);
  }

  // clickAddChild = () => {
  //   <KidRegistrationForm />
  // }

  render() {
      const { profile } = this.state;

    return (
      <div>
    <li>
      <span className="col"><h2>Welcome to our page</h2><h2>{profile.name}</h2></span>
    </li>
    <li>
      <span className="col">{profile.email}</span>
    </li>
    {/* <button className="btn btn-primary" onClick= {this.clickAddChild}>Add your kid</button> */}
    <KidRegistrationForm SaveChildForm={this.SaveChildForm}/>
    </div>
    );
  }
}

export default ParentProfile;