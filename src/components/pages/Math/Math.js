import React from 'react';
import './Math.scss';
import kidRequest from '../../../helpers/data/kidRequest';

const mathInformation = {
  score: [],
  firstNumber: 0,
  secondNumber: 0,
  answer: 0,
  result: 0,
  operation:''
}
class Math extends React.Component {

  state = {
    newInformation: mathInformation,
  }
componentDidMount() {
kidRequest.getKids().then((score) => {
  console.log(score);
  this.setState({ score });
})
}

formFieldStringState = (firstNumber, e) => {
  e.preventDefault();
  const tempInfo = { ...this.state.newInformation};
  tempInfo[firstNumber] = e.target.value;
  this.setState({ newInformation: tempInfo});
}
firstNumberChange = (e) => {
  this.formFieldStringState('firstNumber', e);
}

secondNumberChange = (e) => {
  this.formFieldStringState('secondNumber', e);
}
answerChange = (e) => {
  this.formFieldStringState('answer', e);
}
getOperation = (e) => {
  console.log(e.target.value);
 this.setState({ operation: e.target.value});
}

calculate = () => {
  if(this.state.operation === 'add') {
  let Num1 = parseInt(this.state.newInformation.firstNumber);
  let Num2 = parseInt(this.state.newInformation.secondNumber);
  this.setState({ result: Num1  + Num2});
  }
}

  render() {
    const { newInformation} = this.state;

    return (
      <div className="wrap-math"> 
        <div className="col numbers">
        <div>
          <label>Enter first number</label>
            <input type="number" className="num1" placeholder="1" value={newInformation.firstNumber} onChange={this.firstNumberChange}/>
        </div>
        <button className="btn btn-danger add operation" value="add" onClick={this.getOperation}>+</button>
         <button className="btn btn-danger subtract operation" value="subtract">-</button>
         <button className="btn btn-danger divid operation" value="divid">/</button>
         <button className="btn btn-danger multiply operation" value="multiply">X</button>
        <div>
          <label>Enter second number</label>
          <input type="number" className="num2" placeholder="1" value={newInformation.secondNumber} onChange={this.secondNumberChange}/>
        </div>
         <div>
          <label>Your Answer</label>
          <input type="number" className="answer" placeholder="1" value={newInformation.answer} onChange={this.answerChange}/>
        </div>
         

   <input type="submit" value="Submit" onClick={this.calculate} />
   <h2>{this.state.result}</h2>
        </div>
      </div>
    );
  }
}

export default Math;