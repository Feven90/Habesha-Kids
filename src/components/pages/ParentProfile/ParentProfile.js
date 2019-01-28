import React from 'react';
import 'firebase/auth';
import getParentInfo from '../../../helpers/data/parentInformation';
import autheRequests from '../../../helpers/data/autheRequests';
import kidRequest from '../../../helpers/data/kidRequest';
import KidRegistrationForm from '../KidsProfile/KidsRegistrationForm';
import KidsHome from '../KidsHome/KidsHome';
import './ParentProfile.scss';

class ParentProfile extends React.Component {
  state = {
    profile: [],
    kids: [],
  }
  componentDidMount() {
    const uid = autheRequests.getCurrentUid();
  getParentInfo.getParentProfile(uid).then((profile) => { 
    this.setState({profile})
  });
  kidRequest.getKids(uid).then((kids) => {
    console.log(kids);
    this.setState({ kids });
  });
}

deleteOneKid = (kidId) => {
  const uid = autheRequests.getCurrentUid();
  kidRequest.deleteKid(kidId)
    .then(() => {
      kidRequest.getKids(uid)
        .then((kids) => {
          this.setState({ kids });
        });
    })
    .catch(err => console.error('error with delte single', err));
}

  SaveChildForm = (newKidInformation) => {
    const uid= autheRequests.getCurrentUid();
    newKidInformation.uid = autheRequests.getCurrentUid();
    kidRequest.postKidRequest(newKidInformation).then(() => {
      kidRequest.getKids(uid).then((kids) => {
        console.log(kids);
        this.setState({ kids });
      });
    })
    .catch(err => console.error('error with kids post', err));
  }

  render() {
      const { profile } = this.state;

    return (
      <div>
        <div className="profile-welcome">
            <span className="profile-welcome"><h2>Welcome {profile.name}</h2></span>
        </div>
          <div className="kid-form-and-info">
            <div className="kids-home">
              <KidsHome kids={this.state.kids} deleteSingleKid ={this.deleteOneKid}/>
            </div>
            <div className="kid-registration-form">
              <KidRegistrationForm SaveChildForm={this.SaveChildForm}/>
            </div>
          </div>
          </div>
    );
  }
}

export default ParentProfile;