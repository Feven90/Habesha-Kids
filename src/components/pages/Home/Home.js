import React from 'react';
import './Home.scss';
import alphabet from '../../../images/alphabet.jpg';
import profile from '../../../images/tom&jerry.jpg';
import numbers from '../../../images/numbers.jpg';
import colors from '../../../images/colors.jpeg';

class Home extends React.Component {
  changeView = (e) => {
    // const view = e.target.closest('.card').id;
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  clickProfile = () => {
    this.props.history.push(`/profile`);
  }

  render() {
    return (
      <div className="wrap-home">
        <div className="home-navigation" id="alphabets" onClick={this.changeView}>
            <h6 className=""><img src={alphabet} alt="alphabet" /><p>ፊደላት/Alphabets</p></h6>
        </div>
        <div className="home-navigation" id='numbers' onClick={this.changeView}>
            <h6 className=""><img src={numbers} alt="numbers" /><p>ቁጥሮች/Numbers</p></h6>
        </div>
        <div className="home-navigation" id='colors' onClick={this.changeView}>
            <h6 className=""><img src={colors} alt="colors" /><p>ቀለማት/Colors</p></h6>
        </div>
        <div className="home-navigation" id='profile' onClick={this.changeView}>
            <h6 className=""><img src={profile} alt="words" /><p>ገፅ/Profile</p></h6>
      </div>
      </div>
    );
  }
}

export default Home;