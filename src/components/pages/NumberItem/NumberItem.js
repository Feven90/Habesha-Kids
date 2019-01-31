import React from 'react';
import './NumberItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class NumberItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

  clickNumber = () => {
    const x=document.getElementById(this.props.number.id);
    console.log(x);
    x.play();
    console.log("click");
  }

  render() {
    const { number } = this.props;
    const sound = require(`../../../assets/sounds/numbers/${number.numberAudio}`);
  
    return (
        <div className="number-item">
            <p onClick={this.clickNumber}>{number.number}</p>
            <audio id={number.id}>
            <source src={sound}/>
          </audio>
        </div>
    );
  }
}

export default NumberItem;
