import React from 'react';
// import './NumberItem.scss';
import kidRequest from '../../../helpers/data/kidRequest';

const mathInformation = {
  score: [],
  firstNumber: 0,
  secondNumber: 0,
  answer: 0,
  result: 0
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
calculate = (e) => {
  let Num1= document.getElementsByClassName("num1").innerHTML;
  let Num2 = document.getElementsByClassName("num2").innerHTML;
  // let kidAnswer = document.getElementsByClassName("answer").value;
  console.log(Num1);
  console.log(Num2);
  let operation = e.target.value;
  console.log(operation);
  if(operation === 'add')
  this.setState({ result: (parseInt(Num1) + parseInt(Num2)) });
}

  render() {
    const { newInformation} = this.state;

    return (
      <div> 
        <div className="col numbers">
        <div>
          <label>Enter first number</label>
            <input type="number" className="num1" placeholder="1" value={newInformation.firstNumber} onChange={this.firstNumberChange}/>
        </div>
        <div>
          <label>Enter second number</label>
          <input type="number" className="num2" placeholder="1" value={newInformation.secondNumber} onChange={this.secondNumberChange}/>
        </div>
         <div>
          <label>Your Answer</label>
          <input type="number" className="answer" placeholder="1" value={newInformation.answer} onChange={this.answerChange}/>
        </div>
         <button className="btn btn-danger add" vlaue="add">+</button>
         <button className="btn btn-danger subtract" value="subtract">-</button>
         <button className="btn btn-danger divid" value="divid">/</button>
         <button className="btn btn-danger multiply" value="multiply">X</button>

   <input type="submit" value="Submit" onClick={this.calculate} />
   <h2>{newInformation.result}</h2>
        </div>
      </div>
    );
  }
}

export default Math;