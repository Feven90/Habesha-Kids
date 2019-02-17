import React from 'react';
import KidItem from '../KidItem/KidItem';
import './KidsHome.scss';

class KidsHome extends React.Component {
  // static propTypes = {
  //   tutorials: PropTypes.arrayOf(tutorialShape),
  //   deleteSingleTutorial: PropTypes.func,
  // }

  render() {
    const { kids, deleteSingleKid , passKidToEdit, kidScore } = this.props;
    const kidItemComponents = kids.map(kid => (
      <KidItem
        kid={kid}
        key={kid.id}
        deleteSingleKid={deleteSingleKid}
        passKidToEdit={passKidToEdit}
        kidScore={kidScore}

      />
    ));
    return (
      <div className="kids">
        <ul className="kids-ul">{kidItemComponents}</ul>
      </div>
    );
  }
}

export default KidsHome;