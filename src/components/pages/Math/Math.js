import React from 'react';
// import './NumberItem.scss';
import kidRequest from '../../../helpers/data/kidRequest';
class Math extends React.Component {
  state = {
      score: [],
      firstNumber: 0,
      secondNumber: 0
  }
componentDidMount() {
kidRequest.getKids().then((score) => {
  console.log(score);
  this.setState({ score });
})
}
calculate = () => {
  let Num1= document.getElementsByClassName("num1").value;
  let Num2 = document.getElementsByClassName("num2").value;
  let operation = e.target.value;

}

  render() {
    const { firstNumber, secondNumber } = this.state;
    return (
      <div> 
        <div className="col numbers">
        <div>
          <label>Enter first number</label>
            <input type="number" className="num1" placeholder="1" value={firstNumber}/>
        </div>
        <div>
          <label>Enter second number</label>
          <input type="number" className="num2" placeholder="1" value={secondNumber}/>
        </div>
         <button className="btn btn-danger add">+</button>
         <button className="btn btn-danger subtract">-</button>
         <button className="btn btn-danger divid">/</button>
         <button className="btn btn-danger multiply">X</button>

   <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Math;