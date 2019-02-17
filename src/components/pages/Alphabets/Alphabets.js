import React from 'react';
import 'firebase/auth';
import './Alphabets.scss';
import AlphabetItem from '../AlphabetItem/AlphabetItem';
import alphabetRequest from '../../../helpers/data/alphabetsRequest';

class Alphabets extends React.Component {
  state = {
    alphabets: [],
    perPageAlphabets: [],
    page: 1
  }
componentDidMount() {
alphabetRequest.getAlphabets().then((alphabets) => {
  this.setState({ alphabets });
});
  this.firstPageAlphabets();
}

firstPageAlphabets = () => {
  alphabetRequest.getAlphabets().then((alphabets) => {
    let perPageAlphabets = alphabets.slice(0,35);
    this.setState({ perPageAlphabets });
});
}

clickNextPage = () => {
  if(this.state.page === 1) {
      const { alphabets } = this.state;
        let perPageAlphabets = alphabets.slice(35,70);
        this.setState({ perPageAlphabets })
    this.setState({ page:2 });
    }
    if (this.state.page === 2) {
      alphabetRequest.getAlphabets().then((alphabet) => {
          let perPageAlphabets = alphabet.slice(70,105);
          this.setState({ perPageAlphabets })
      });
    this.setState({ page:3 });
    }
    if (this.state.page === 3) {
      alphabetRequest.getAlphabets().then((alphabet) => {
          let perPageAlphabets = alphabet.slice(105,140);
          this.setState({ perPageAlphabets })
      });
    this.setState({ page:4 });
    }
    if (this.state.page === 4) {
      alphabetRequest.getAlphabets().then((alphabet) => {
          let perPageAlphabets = alphabet.slice(140,175);
          this.setState({ perPageAlphabets })
      });
    this.setState({ page:5 });
    }
    if (this.state.page === 5) {
      alphabetRequest.getAlphabets().then((alphabet) => {
          let perPageAlphabets = alphabet.slice(175,210);
          this.setState({ perPageAlphabets })
      });
    this.setState({ page:6 });
    }
    if (this.state.page === 6) {
      alphabetRequest.getAlphabets().then((alphabet) => {
          let perPageAlphabets = alphabet.slice(210,245);
          this.setState({ perPageAlphabets })
      });
    this.setState({ page:7 });
    }
    if(this.state.page === 7) {
      this.firstPageAlphabets();
      this.setState({ page:1 });
    }
}

render() {
    const { perPageAlphabets } = this.state;
    const alphabetItemComponents = perPageAlphabets.map(alphabet => (
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
        <button className="btn btn-primary" onClick={this.clickNextPage}>next</button>
      </div>
    );
  }
}

export default Alphabets;