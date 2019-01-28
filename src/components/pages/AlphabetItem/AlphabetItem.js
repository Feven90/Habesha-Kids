import React from 'react';
import './AlphabetItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class AlphabetItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

  clickAlphabet = () => {
    const x=document.getElementById('audio');
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
          <audio id="audio">
          <source src={sound}/>
      </audio>
        </div>
    );
  }
}

export default AlphabetItem;
