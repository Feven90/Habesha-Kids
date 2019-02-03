import React from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import './Colors.scss';
import ColorItem from '../ColorItem/ColorItem';
import colorRequest from '../../../helpers/data/colorsRequest';

class Colors extends React.Component {
  state = {
    colors: [],
  }
componentDidMount() {
colorRequest.getColors().then((colors) => {
  console.log(colors);
  this.setState({ colors });
})
}

  render() {
    const {colors } = this.state;
    const colorItemComponents = colors.map(color => (
      <ColorItem
        color={color}
        key={color.id}
      />
    ));
    return (
      <div> 
        {/* <div className="colors"> */}
        <div className="card-group">
          <h2>
          {colorItemComponents}
          </h2>
        </div>
        </div>
    );
  }
}

export default Colors;