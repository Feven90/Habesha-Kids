import React from 'react';
import './KidItem.scss';
import { Link } from 'react-router-dom';
// import tutorialShape from '../../helpers/propz/tutorialShape';
// import authRequests from '../../../helpers/data/autheRequests';

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
    return (
      <div>
        <li className="kids-item kids-listing">
          <Link to={`/home/${kid.id}`} className="kid-link"><span className="col-2 kids-info" >{kid.name}</span></Link>
          <div>
          <span className="col">
              <button className="btn btn-danger" onClick={this.editKidEvent}> <i class="fas fa-pencil-alt"></i></button>
            </span>
            <span className="col">
              <button className="btn btn-danger" onClick={this.deleteKidEvent}> <i class="fas fa-trash-alt"></i></button>
            </span>
            </div>       
            </li>
      </div>
    );
  }
}

export default KidItem;
