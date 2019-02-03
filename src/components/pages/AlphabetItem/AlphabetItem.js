import React from 'react';
import './AlphabetItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class AlphabetItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

clickAlphabet = () => {
  const x=document.getElementById(this.props.alphabet.id);
  x.play();
}

  render() {
    const { alphabet } = this.props;
    const sound = require(`../../../assets/sounds/letters/${alphabet.alphabetAudio}`);
  
    return (
      // <div className="card">
        <div className="alphabet-item">
            <p onClick={this.clickAlphabet}>{alphabet.name}</p>
            <audio id={alphabet.id}>
            <source src={sound} type='audio/mp3'/>
          </audio>
        </div>
        // </div>
    );
  }
}

export default AlphabetItem;
