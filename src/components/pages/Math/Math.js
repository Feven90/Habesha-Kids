import React from 'react';
import './Math.scss';
import kidRequest from '../../../helpers/data/kidRequest';
import MathExercises from '../MathExercises/MathExercises';


// const mathInformation = {
//   score: [],
//   // firstNumber: 0,
//   // secondNumber: 0,
//   // answer: 0,
//   result: 0,
//   operation:''
// }
class Math extends React.Component {

  state = {
    // result: 0, 
    // operation: ''
  }
  // state = {
  //   newInformation: mathInformation,
  // }
// componentDidMount() {
// kidRequest.getKids().then((score) => {
//   console.log(score);
//   this.setState({ score });
// })
// }

// formFieldStringState = (firstNumber, e) => {
//   e.preventDefault();
//   const tempInfo = { ...this.state.newInformation};
//   tempInfo[firstNumber] = e.target.value;
//   this.setState({ newInformation: tempInfo});
// }
// firstNumberChange = (e) => {
//   this.formFieldStringState('firstNumber', e);
// }

// secondNumberChange = (e) => {
//   this.formFieldStringState('secondNumber', e);
// }
// answerChange = (e) => {
//   this.formFieldStringState('answer', e);
// }
getAddOperation = (e) => {
  console.log(e.target.value);
 this.setState({ operation: "add"});
}

// calculate = () => {
//   // if(this.state.operation === 'add') {
//   let Num1 = parseInt(this.state.newInformation.firstNumber);
//   let Num2 = parseInt(this.state.newInformation.secondNumber);
//   this.setState({ result: Num1 + Num2});
//   // }
// }

  render() {
    // const { newInformation} = this.state;
    // const { operation } = this.state;
    const { kid } = this.props;

    return (
      <div className="all">
        {/* <MathExercises kid={kid}/> */}
      </div>
    );
  }
}

export default Math;