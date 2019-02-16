import React from 'react';
import './MathExercises.scss';

const mathInformation = {
  result: 0,
  operation:'',
  firstNumber:0,
  secondNumber:0,
  answer:'',
  score: 0,
  // submit
}
class MathExercises extends React.Component {

  state = {
    newInformation: mathInformation,
  }


// componentDidMount() {
// const { kid } = this.props;
// // console.log(kid);
// }

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

operationChange = (e) => {
  this.formFieldStringState('operation', e);
}
getOperation = (e) => {
  console.log(e.target.value);
 this.setState({ operation: e.target.value});
}

calculate = (e) => {
  // const { operation } = this.props;
  let mathOperation = this.state.newInformation.operation; 
  let Num1 = parseInt(this.state.newInformation.firstNumber);
  let Num2 = parseInt(this.state.newInformation.secondNumber);
  if(mathOperation === '+') {
  this.setState({ result: Num1  + Num2 });
  }
  else if(mathOperation === '-') {
    this.setState({ result: Num1 - Num2 });
    const { kidScore } = this.props;
   {kidScore()}
  }
  else if(mathOperation === 'x') {
    this.setState({ result: Num1 * Num2 });
  }
  else if(mathOperation === '/') {
    this.setState({ result: Num1 / Num2 });
  }
}


  render() {
    const { kid } = this.props.location.state;
    const { kidScore } = this.props;
    const { newInformation} = this.state;
    // console.log(this.state.newInformation.operation);
    // console.log(kidScore);
   

    let Answer = parseInt(this.state.newInformation.answer);
    // let firstNumber = this.state.newInformation.firstNumber;
    // let secondNumber = this.state.newInformation.secondNumber;
    // let subtractionAnswer = parseInt(this.state.newInformation.subtractionAnswer);
    let Result = this.state.result;


    const twoFunctions = () => {
      this.calculate();
      {kidScore()};


    }
    const cards = () => {
      return (
      <div className="wrap-items"> 
      <div className="card">
      <h2>ስሌት/Calculation</h2>
      <div>
        <label>Enter first number</label>
          <input type="number" className="num1 input-numbers" placeholder="1" value={newInformation.firstNumber} onChange={this.firstNumberChange}/>
      </div>
      <div>
        <label>Enter Operation</label>
          <input type="text" className="operation input-numbers" placeholder="+" value={newInformation.operation} onChange={this.operationChange}/>
      </div>
      <div>
        <label>Enter second number</label>
        <input type="number" className="num2 input-numbers" placeholder="1" value={newInformation.secondNumber} onChange={this.secondNumberChange}/>
      </div>
       <div>
        <label>Your Answer</label>
        <input type="number" className="answer input-numbers" placeholder="1" value={newInformation.answer} onChange={this.answerChange}/>
      </div>
      <div>
      <button type="submit" value="Submit" className="btn submit btn-danger" onClick={twoFunctions}>Submit</button>
 </div>
 {/* {this.score()} */}
 <h2> Score: {kid.score}</h2>
 </div>
    </div>
      );
    }
    if(Result === Answer) {
      return (
        <div>
          {cards()}
            {/* {this.scoreCard} */}
          <h2 className="good-job">Good Job!!</h2>
          
        </div>
      );
    }
    
    // if(Result == Answer) {
    //   return (
    //     <div>
    //       <div>{cards()}
    //         {/* {this.scoreCard} */}
    //       </div>
    //       <h2>Good Job!!</h2>
          
    //     </div>
    //   );
    // }

      return ( 
        <div>{cards()}</div>
      );
    }
  }


export default MathExercises;