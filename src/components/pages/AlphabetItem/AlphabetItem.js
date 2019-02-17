import React from 'react';
import './AlphabetItem.scss';

class AlphabetItem extends React.Component {

clickAlphabet = () => {
  const x=document.getElementById(this.props.alphabet.id);
  x.play();
}

  render() {
    const { alphabet } = this.props;
    const sound = require(`../../../assets/sounds/letters/${alphabet.alphabetAudio}`);
  
    return (
        <div className="alphabet-item">
            <p onClick={this.clickAlphabet} className="alphabet-button">{alphabet.name}</p>
            <audio id={alphabet.id}>
            <source src={sound} type='audio/mp3'/>
          </audio>
        </div>
    );
  }
}

export default AlphabetItem;
