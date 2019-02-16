import React from 'react';
import './MathExercises.scss';
import kidRequest from '../../../helpers/data/kidRequest';

const mathInformation = {
  result: 0,
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
  }
  else if(mathOperation === 'x') {
    this.setState({ result: Num1 * Num2 });
  }
  else if(mathOperation === '/') {
    this.setState({ result: Num1 / Num2 });
  }
}


  // }
scoreCard = () => {
  // const { kidId } = this.props.location.state.kid.id;
//  console.log(kidId);
  const { kidScore }  = this.props.match.params;
  console.log(kidScore);
  }


// calculateSubtraction = (e) => {
//   // const { operation } = this.props; 
//   // if(operation === 'add') {
//   let Num3 = parseInt(this.state.newInformation.thirdNumber);
//   let Num4 = parseInt(this.state.newInformation.fourthNumber);
//   this.setState({ result: Num3  - Num4});
//   // }
// }

  render() {
    const { kid } = this.props.location.state;
    const { kiScore } = this.props;
    const { newInformation} = this.state;
    // console.log(this.state.newInformation.operation);
    // console.log(kidScore);
   

    let Answer = parseInt(this.state.newInformation.answer);
    let firstNumber = this.state.newInformation.firstNumber;
    let secondNumber = this.state.newInformation.secondNumber;
    let subtractionAnswer = parseInt(this.state.newInformation.subtractionAnswer);
    let Result = this.state.result;

    // const tryAgain = () => {
    //   if(Result !== Answer){
    //     console.log(this.Result);
    //     return (
    //       <div>
    //         <div>{cards()}</div>
    //         <h2>Please try again!!</h2>
    //     </div>
    //     );
    //   }
    // }
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
      <button type="submit" value="Submit" className="btn submit btn-danger" onClick={this.calculate}>Submit</button>
 </div>
 {/* {this.score()} */}
 <h2> Score: {kid.score}</h2>
 </div>
    </div>
      );
    }
    if(Result === Answer) {
      console.log(Result)
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