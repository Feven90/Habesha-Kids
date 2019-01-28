import React from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import './Alphabets.scss';
import AlphabetItem from '../AlphabetItem/AlphabetItem';
import alphabetRequest from '../../../helpers/data/alphabetsRequest';

class Alphabets extends React.Component {
  state = {
    alphabets: [],
  }
componentDidMount() {
alphabetRequest.getAlphabets().then((alphabets) => {
  this.setState({ alphabets });
})
}

  render() {
    const {alphabets } = this.state;
    const alphabetItemComponents = alphabets.map(alphabet => (
      <AlphabetItem
        alphabet={alphabet}
        key={alphabet.id}
      />
    ));
    return (
      <div> 
        <div className="alphabets">
          <h2>
          {alphabetItemComponents}
          </h2>
        </div>
      </div>
    );
  }
}

export default Alphabets;