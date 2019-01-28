import React from 'react';
import './AlphabetItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class AlphabetItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

  render() {
    const { alphabet } = this.props;
    const sound = require(`../../../assets/sounds/letters/${alphabet.alphabetAudio}`)

    return (
        <div className="alphabet-item">
          {alphabet.name}
          <audio>
          <source src={sound}/>
      </audio>
        </div>
    );
  }
}

export default AlphabetItem;
