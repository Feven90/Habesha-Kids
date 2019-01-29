import React from 'react';
import './AlphabetItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class NumberItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

  render() {
    const { number } = this.props;
    // const sound = require(`../../../assets/sounds/letters/${alphabet.alphabetAudio}`);
    // console.log(sound);
  
    return (
        <div className="number-item">
          {/* <audio id="audio"> */}
            {number.name}
            {/* <source src={this.sound}/> */}
          {/* </audio> */}
        </div>
    );
  }
}

export default NumberItem;
