import React from 'react';
import './KidItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';
import authRequests from '../../../helpers/data/autheRequests';

class KidItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

  deleteKidEvent = (e) => {
    e.preventDefault();
    const { deleteSingleKid, kid } = this.props;
    deleteSingleKid(kid.id);
  }

  render() {
    const { kid } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (kid.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-danger" onClick={this.deleteKidEvent}> Delete</button>
            </span>
          </div>
        );
      }
      return <span className="col space"></span>;
    };
    return (
      <li className="kids-item kids-listing">
        <span className="col-2 kids-info" >{kid.name}</span>
        <span className="col-7 kids-info">{kid.age}</span>
        <span>{makeButtons()}</span>
      </li>
    );
  }
}

export default KidItem;
