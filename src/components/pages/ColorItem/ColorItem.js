import React from 'react';
import './ColorItem.scss';
// import tutorialShape from '../../helpers/propz/tutorialShape';

class ColorItem extends React.Component {
  // static propTypes = {
  //   tutorial: tutorialShape,
  // }

  clickColor = () => {
    const x=document.getElementById(this.props.color.id);
    x.play();
  }

  render() {
    const { color } = this.props;
    const sound = require(`../../../assets/sounds/colors/${color.colorAudio}`);
    const colorName = require(`../../../images/colors/${color.name}`);
  
    return (
        // <div className="color-item">
        <div className="color-item">
            <img className="card-img-top" onClick={this.clickColor} src={colorName} alt="colors"/>
            <audio id={color.id}>
            <source src={sound}/>
          </audio>
        </div>
    );
  }
}

export default ColorItem;
