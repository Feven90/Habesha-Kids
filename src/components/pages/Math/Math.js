import React from 'react';
// import './NumberItem.scss';
import kidRequest from '../../../helpers/data/kidRequest';
class Math extends React.Component {
  state = {
      score: [],
  }
componentDidMount() {
kidRequest.getKids().then((score) => {
  console.log(score);
  this.setState({ score });
})
}

  render() {
    // const {numbers } = this.state;
    // const numberItemComponents = numbers.map(number => (
    //   <NumberItem
    //     number={number}
    //     key={number.id}
      // />
    // ));
    return (
      <div> 
        <div className="numbers">
        <label>Enter first number</label>
          <input type="number" placeholder="1" />
          <label>Enter second number</label>
          <input type="number" placeholder="1" />
          <label for="operation">Operation</label>
    <select id="operation" name="operation">
      <option value="addition">+</option>
      <option value="subtraction">-</option>
      <option value="division">/</option>
      <option value="multiplication">x</option>
    </select>
    <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Math;