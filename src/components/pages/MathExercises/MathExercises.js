import React from 'react';
import './MathExercises.scss';
import kidRequest from '../../../helpers/data/kidRequest';

const mathInformation = {
  operation:'',
  firstNumber:'',
  secondNumber:'',
  answer:'',
}
class MathExercises extends React.Component {

  state = {
    newInformation: mathInformation,
    kid:[],
    isCorrect: true,
    isCongrats: false,
    result: 0,
  }


componentDidMount() {
  const kidId = this.props.location.state.kid.id;
  kidRequest.getSingleKid(kidId).then((kid) => {
  this.setState({ kid: kid.data });
});
}

formFieldStringState = (name, e) => {
  e.preventDefault();
  const tempInfo = { ...this.state.newInformation};
  tempInfo[name] = e.target.value;
  this.setState({ newInformation: tempInfo});
  this.setState({ isCongrats:false })
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
  //console.log(e.target.value);
 this.setState({ operation: e.target.value});
}

checkAnswer = () => {
  let Result = this.state.result;
  let Answer = parseInt(this.state.newInformation.answer);
  if(Result === Answer) {
    this.setState({ isCorrect: true })
    this.updateScore();
  }
  else{
    this.setState({ isCorrect: false })
  }
  }

  updateScore = () => {
    const { kid } = this.state;
    const kidId = this.props.location.state.kid.id;
    const newScore = kid.score + 10;
    kid.id = kidId;
   kid.score = newScore;
    kidRequest.putRequest(kidId, kid).then(() => {
      kidRequest.getSingleKid(kidId).then((kid) => {
        this.setState({ kid: kid.data });
      });
    })
    this.setState({ isCongrats: true})
  }

  setResult = (result) => {
    this.setState({ result: result}, this.checkAnswer)
  }
calculate = (e) => {
  this.setState({ isCongrats: true });
  let mathOperation = this.state.newInformation.operation; 
  let Num1 = parseInt(this.state.newInformation.firstNumber);
  let Num2 = parseInt(this.state.newInformation.secondNumber);
  let result = '';
  if(mathOperation === '+') {
  result= Num1  + Num2;
  }
  else if(mathOperation === '-') {
    result= Num1 - Num2 ;

  }
  else if(mathOperation === 'x') {
    result = Num1 * Num2 ;

  }
  else if(mathOperation === '/') {
    result= Num1 / Num2;
  }
   this.setResult(result);
  return result;
}

  render() {
    const { kid, isCorrect, isCongrats } = this.state;
    const { newInformation} = this.state;


    const makeCongrats = () => {
      if(isCongrats) {
      if(isCorrect) {
        return( 
          <div><h2 className="good-job">Good Job!!</h2></div>
        )
      }
      return(
        <div><h2 className="try-again">Sorry, Incorrect</h2>
        <h3 className="good-job">The correct answer is: {this.state.result}</h3></div>
      )
      }

    }
    const cards = () => {
      return (
      <div className="wrap-items"> 
      <div className="card">
      <h2>ስሌት/Calculation</h2>
      <div>
        <label>Enter first number</label>
          <input type="number" className="num1 input-numbers"  placeholder="1" value={newInformation.firstNumber} onChange={this.firstNumberChange}/>
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
 <h2> Score: {kid.score}</h2>
 {makeCongrats()}
 </div>
    </div>
      );
    }
      return ( 
        <div>{cards()}</div>
      );
    }
  }


export default MathExercises;