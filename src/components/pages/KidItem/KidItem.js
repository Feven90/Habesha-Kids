import React from 'react';
import './KidItem.scss';
import { Link } from 'react-router-dom';
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
  editKidEvent = (e) => {
    e.preventDefault();
    const { passKidToEdit, kid } = this.props;
    passKidToEdit(kid.id);
  }

  render() {
    const { kid } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (kid.uid === uid) {
        return (
          <div>
          <span className="col">
              <button className="btn btn-danger" onClick={this.editKidEvent}> Edit</button>
            </span>
            <span className="col">
              <button className="btn btn-danger" onClick={this.deleteKidEvent}> Delete</button>
            </span>
            </div>
        );
      }
      return <span className="col space"></span>;
    };
    return (
      <div>
        <li className="kids-item kids-listing">
          <Link to={`/home/${kid.id}`} className="kid-link"><span className="col-2 kids-info" >{kid.name}</span></Link>
          {/* <span className="col-7 kids-info">{kid.age}</span> */}
          <span>{makeButtons()}</span>
        </li>
      </div>
    );
  }
}

export default KidItem;
