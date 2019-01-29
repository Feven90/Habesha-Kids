import React from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import './Alphabets.scss';
import AlphabetItem from '../AlphabetItem/AlphabetItem';
import alphabetRequest from '../../../helpers/data/alphabetsRequest';

class Alphabets extends React.Component {
  state = {
    alphabets: [],
    perPageAlphabets: [],
    page: 0
    // pageLength:
  }
componentDidMount() {
alphabetRequest.getAlphabets().then((alphabets) => {
  this.setState({ alphabets });
  console.log(alphabets);
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
        <button class="btn btn-primary">next</button>
      </div>
    );
  }
}

export default Alphabets;