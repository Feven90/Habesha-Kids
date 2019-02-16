import React from 'react';
// import PropTypes from 'prop-types';
// import tutorialShape from '../../helpers/propz/tutorialShape';

import KidItem from '../KidItem/KidItem';
import MathExercises from '../MathExercises/MathExercises';
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
        <ul>{kidItemComponents}</ul>
        {/* <MathExercises kids={kids}/> */}
      </div>
    );
  }
}

export default KidsHome;