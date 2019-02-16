import React from 'react';
import './KidItem.scss';
import { Link } from 'react-router-dom';
import MathExercises from '../MathExercises/MathExercises';

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
  // }
  
  render() {
    const { kid, kidScore } = this.props;
    console.log(kid.id);
    return (
      <div className="card">
        <li className="kids-item kids-listing">
          <Link to={{ pathname:`/math/${kid.id}`,
                  state: { kid},
                params: kidScore}}
                  className="kid-link">
                  <span className="col-2 kids-info" >{kid.name}</span>
          </Link>
          <div>
          <span className="col">
              <button className="btn btn-danger" onClick={this.editKidEvent}> <i className="fas fa-pencil-alt"></i></button>
            </span>
            <span className="col">
              <button className="btn btn-danger" onClick={this.deleteKidEvent}> <i className="fas fa-trash-alt"></i></button>
            </span>
            </div>       
            </li>
      </div>
    );
  }
}

export default KidItem;
