import React from 'react';
import './AlphabetItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class AlphabetItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }
state = { 
  play: false
};

clickAlphabet = () => {
  const x=document.getElementById(this.props.alphabet.id);
  console.log(x);
  x.play();
  console.log("click");
}

  render() {
    const { alphabet } = this.props;
    const sound = require(`../../../assets/sounds/letters/${alphabet.alphabetAudio}`);
    console.log(sound);
  
    return (
        <div className="alphabet-item">
            <p onClick={this.clickAlphabet}>{alphabet.name}</p>
            <audio id={alphabet.id}>
            <source src={sound} type='audio/mp3'/>
          </audio>
        </div>
    );
  }
}

export default AlphabetItem;
