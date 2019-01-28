import React from 'react';
import './Home.scss';

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
      <div className='Home mx-auto'>
      <button class="btn btn-primary profile-button" onClick={this.clickProfile}>Profile</button>
      <div className="card-deck mt-5">
        <div className="card border-dark" id="alphabets" onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">ፊደላት</h6>
          </div>
        </div>
        <div className="card border-dark" id='numbers' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">ቁጥሮች</h6>
          </div>
        </div>
        <div className="card border-dark" id='colors' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-sun fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">ቀለማት</h6>
          </div>
        </div>
      </div>
      <div className="card-deck mt-5">
        <div className="card border-dark" id='words' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-calendar-alt fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">ቃላት</h6>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;