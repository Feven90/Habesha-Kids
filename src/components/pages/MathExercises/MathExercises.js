import React from 'react';
import './MathExercises.scss';
import kidRequest from '../../../helpers/data/kidRequest';

const mathInformation = {
  result: '',
  operation:'',
  firstNumber:'',
  secondNumber:'',
  thirdNumber:'',
  fourthNumber:'',
  answer:'',
  subtractionAnswer:'',
  fifthNumber: '',
  sixthNumber: '',
  divisionanswer:'',
  score: 0,
  // submit
}
class MathExercises extends React.Component {

  state = {
    newInformation: mathInformation,
  }


componentDidMount() {
const { kid } = this.props;
kidRequest.getSingleKid(kid).then((kido) => {
  console.log(kido);
  // this.setState({ score });
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
thirdNumberChange = (e) => {
  this.formFieldStringState('thirdNumber', e);
}

fourthNumberChange = (e) => {
  this.formFieldStringState('fourthNumber', e);
}
subtractionAnswerChange = (e) => {
  this.formFieldStringState('subtractionAnswer', e);
}
fifthNumberChange = (e) => {
  this.formFieldStringState('fifthNumber', e);
}
sixthNumberChange = (e) => {
  this.formFieldStringState('sixthNumber', e);
}
// getOperation = (e) => {
//   console.log(e.target.value);
//  this.setState({ operation: e.target.value});
// }

calculate = (e) => {
  // const { operation } = this.props; 
  // if(operation === 'add') {
  let Num1 = parseInt(this.state.newInformation.firstNumber);
  let Num2 = parseInt(this.state.newInformation.secondNumber);
  let Answer = parseInt(this.state.newInformation.answer)
  this.setState({ result: Num1  + Num2, submit: e.target.value});
  console.log(Answer);
}
goodJob = () => {
  alert("Good Job!!");

}
  // }

calculateSubtraction = (e) => {
  // const { operation } = this.props; 
  // if(operation === 'add') {
  let Num3 = parseInt(this.state.newInformation.thirdNumber);
  let Num4 = parseInt(this.state.newInformation.fourthNumber);
  this.setState({ result: Num3  - Num4});
  // }
}

  render() {
    const { kid } = this.props;
    const { newInformation} = this.state;
    let Answer = parseInt(this.state.newInformation.answer)
    let subtractionAnswer = parseInt(this.state.newInformation.subtractionAnswer);
    let Result = this.state.result;

    const cards = () => {
      return (
      <div className="wrap-items"> 
      <div className="card">
      <h2>መደመር/Addition</h2>
      <div>
        <label>Enter first number</label>
          <input type="number" className="num1 input-numbers" placeholder="1" value={newInformation.firstNumber} onChange={this.firstNumberChange}/>
      </div>
      <h1>+</h1>
      <div>
        <label>Enter second number</label>
        <input type="number" className="num2 input-numbers" placeholder="1" value={newInformation.secondNumber} onChange={this.secondNumberChange}/>
      </div>
       <div>
        <label>Your Answer</label>
        <input type="number" className="answer input-numbers" placeholder="1" value={newInformation.answer} onChange={this.answerChange}/>
      </div>
      <div>
      <input type="submit" value="Submit" className="btn submit btn-danger" onClick={this.calculate}/>
 <h2>{this.state.result}</h2>
 </div>
 </div>

    <div className="card">
    <h2>መቀነስ/Subtraction</h2>
      <div>
        <label>Enter first number</label>
          <input type="number" className="num3 input-numbers" value={newInformation.thirdNumber} onChange={this.thirdNumberChange}/>
      </div>
      <h1>-</h1>
      {/* <button className="btn btn-danger add operation" value="add" onClick={this.getOperation}>+</button>
       <button className="btn btn-danger subtract operation" value="subtract">-</button>
       <button className="btn btn-danger divid operation" value="divid">/</button>
       <button className="btn btn-danger multiply operation" value="multiply">X</button> */}
      <div>
        <label>Enter second number</label>
        <input type="number" className="num4 input-numbers" value={newInformation.fourthNumber} onChange={this.fourthNumberChange}/>
      </div>
       <div>
        <label>Your Answer</label>
        <input type="number" className="answer input-numbers" value={newInformation.subtractionAnswer} onChange={this.subtractionAnswerChange}/>
      </div>
       
      <div>
      <input type="submit" value="Submit" className="btn btn-danger submit" onClick={this.calculateSubtraction} />
      <h2>{this.state.result}</h2>
      </div>
    </div>
      <div className="card">
      <div>
        <h2>ማካፈል/Division</h2>
        <label>Enter first number</label>
          <input type="number" className="num1 input-numbers" placeholder="1" value={newInformation.fifthNumber} onChange={this.fifthNumberChange}/>
      </div>
      <h1>/</h1>
      <div>
        <label>Enter second number</label>
        <input type="number" className="num2 input-numbers" placeholder="1" value={newInformation.sixthNumber} onChange={this.sixthNumberChange}/>
      </div>
       <div>
        <label>Your Answer</label>
        <input type="number" className="answer input-numbers" placeholder="1" value={newInformation.divisionanswer} onChange={this.divisionAnswerChange}/>
      </div>
      <div>
      <input type="submit" value="Submit" className="btn submit btn-danger" onClick={this.calculate}/>
 <h2>{this.state.result}</h2>
 </div>
 </div>
 <div className="card">
       <h2>ማባዛት/Multiplication</h2>
      <div>
        <label>Enter first number</label>
          <input type="number" className="num1 input-numbers" placeholder="1" value={newInformation.firstNumber} onChange={this.firstNumberChange}/>
      </div>
      <h1>X</h1>
      <div>
        <label>Enter second number</label>
        <input type="number" className="num2 input-numbers" placeholder="1" value={newInformation.secondNumber} onChange={this.secondNumberChange}/>
      </div>
       <div>
        <label>Your Answer</label>
        <input type="number" className="answer input-numbers" placeholder="1" value={newInformation.answer} onChange={this.answerChange}/>
      </div>
      <div>
      <input type="submit" value="Submit" className="btn submit btn-danger" onClick={this.calculate}/>
 <h2>{this.state.result}</h2>
 </div>
 </div>
    </div>
      );
    }
    if(Result === Answer || subtractionAnswer === Result) {
      return (
        <div>
        <h2>{this.goodJob()}</h2>
        <div>{cards()}</div>
        </div>
      );
    }
      return ( 
        <div>{cards()}</div>
      );
    }
  }


export default MathExercises;