import React from 'react';
// import PropTypes from 'prop-types';
// import tutorialShape from '../../helpers/propz/tutorialShape';

import KidItem from '../KidItem/KidItem';

import './KidsHome.scss';

class KidsHome extends React.Component {
  // static propTypes = {
  //   tutorials: PropTypes.arrayOf(tutorialShape),
  //   deleteSingleTutorial: PropTypes.func,
  // }

  render() {
    const { kids, deleteSingleKid } = this.props;
    const kidItemComponents = kids.map(kid => (
      <KidItem
        kid={kid}
        key={kid.id}
        deleteSingleKid={deleteSingleKid}
      />
    ));
    return (
      <div className="kids col">
        <ul>{kidItemComponents}</ul>
      </div>
    );
  }
}

export default KidsHome;