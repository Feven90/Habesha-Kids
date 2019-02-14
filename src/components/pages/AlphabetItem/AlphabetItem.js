import React from 'react';
import './AlphabetItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class AlphabetItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

clickAlphabet = () => {
  const x=document.getElementById(this.props.alphabet.id);
//   const $button= document.getSelector('.alphabet-button');
//   $button.addEventListener('click', function() {
//     const duration = 0.3,
//     delay = 0.08;
//     TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
//   TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
//   TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
// });
  x.play();
}

  render() {
    const { alphabet } = this.props;
    const sound = require(`../../../assets/sounds/letters/${alphabet.alphabetAudio}`);
  
    return (
      // <div className="card">
        <div className="alphabet-item">
            <p onClick={this.clickAlphabet} className="alphabet-button">{alphabet.name}</p>
            <audio id={alphabet.id}>
            <source src={sound} type='audio/mp3'/>
          </audio>
        </div>
        // </div>
    );
  }
}

export default AlphabetItem;
