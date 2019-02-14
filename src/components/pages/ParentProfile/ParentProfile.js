import React from 'react';
import 'firebase/auth';
import getParentInfo from '../../../helpers/data/parentInformation';
import autheRequests from '../../../helpers/data/autheRequests';
import kidRequest from '../../../helpers/data/kidRequest';
import KidRegistrationForm from '../KidsRegistrationForm/KidsRegistrationForm';
import KidsHome from '../KidsHome/KidsHome';
import './ParentProfile.scss';

class ParentProfile extends React.Component {
  state = {
    profile: [],
    kids: [],
    isEditing: false,
    editId: '-1',
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

  kidFormSubmitEvent = (newKidInformation) => {
    const{ isEditing, editId } = this.state;
    const uid= autheRequests.getCurrentUid();
    if (isEditing) {
      newKidInformation.uid = autheRequests.getCurrentUid();
      newKidInformation.score = 0;
      kidRequest.putRequest(editId, newKidInformation)
        .then(() => {
          kidRequest.getKids(uid)
            .then((kids) => {
              this.setState({ kids, isEditing: false, editId: '-1' });
            });
        })
        .catch(err => console.error('error with listings post', err));
    } else {
    newKidInformation.uid = autheRequests.getCurrentUid();
    newKidInformation.score = 0;
    kidRequest.postKidRequest(newKidInformation).then(() => {
      kidRequest.getKids(uid).then((kids) => {
        console.log(kids);
        this.setState({ kids });
      });
    })
    .catch(err => console.error('error with kids post', err));
  }
}
passKidToEdit = kidId => this.setState({ isEditing: true, editId: kidId });

  render() {
      const { profile, isEditing, editId } = this.state;

    return (
      <div>
        <div className="profile-welcome">
            <span className="profile-welcome"><h2>Welcome {profile.name}</h2></span>
        </div>
          <div className="kid-form-and-info">
            <div className="kids-home">
              <KidsHome
              kids={this.state.kids}
              deleteSingleKid ={this.deleteOneKid}
              passKidToEdit={this.passKidToEdit}
              />
            </div>
            <div className="kid-registration-form">
              <KidRegistrationForm SaveChildForm={this.kidFormSubmitEvent} isEditing={isEditing} editId={editId}/>
            </div>
          </div>
          </div>
    );
  }
}

export default ParentProfile;