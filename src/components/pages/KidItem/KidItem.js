import React from 'react';
import './KidItem.scss';
import { Link } from 'react-router-dom';


class KidItem extends React.Component {

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
    const { kid, kidScore } = this.props;
    return (
      <div className="">
        <div className="kids-item kids-listing">
        <div className="col">
          <Link to={{ pathname:`/math/${kid.id}`,
                  state: { kid},
                kidScore:{kidScore}}}
                  className="kid-link">
                  <span className="col-2 kids-info" >{kid.name}</span>
          </Link>
          </div>
          <div>
          <span className="col">
              <button className="btn btn-danger" onClick={this.editKidEvent}> <i className="fas fa-pencil-alt"></i></button>
            </span>
            <span className="col">
              <button className="btn btn-danger" onClick={this.deleteKidEvent}> <i className="fas fa-trash-alt"></i></button>
            </span>
            </div>       
            </div>
      </div>
    );
  }
}

export default KidItem;
