import React from 'react';
import 'firebase/auth';
import getParentInfo from '../../../helpers/data/parentInformation';
import autheRequests from '../../../helpers/data/autheRequests';

class ParentProfile extends React.Component {
  state = {
    profile: '',
  }
  componentDidMount() {
    const uid = autheRequests.getCurrentUid();
  getParentInfo.getParentProfile(uid).then((profile) => { 
    console.log(profile);
    this.setState({ profile})
  });
}

  render() {
      const { profile } = this.state;
    return (
      <div>
    <li>
      <span className="col-2">{profile}</span>
    </li>
    <li>
      <span className="col-7">{profile}</span>
    </li>
    </div>
    );
  }
}

export default ParentProfile;