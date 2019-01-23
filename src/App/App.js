import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase-database';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/autheRequests';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.authListner();
  } 
  authListner = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });

        // const database = firebase.database();
        // database.ref('parents/' + user.uid).push({
        //   // username: user.name,
        //     email: user.email,
        //     uid: user.uid
        //   });
        

        // const admin = require("firebase-admin");
        // const db = admin.database();
        // const ref = db.ref("project/habesha-kids/database");
        // const postsRef = ref.child("parents");

        //   // let postsRef = firebase.database().ref("parents");
        //   const newPostRef = postsRef.push();
        //   newPostRef.set({
        //     email: user.email,
        //     uid: user.uid
        //   });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }


  // if (user != null) {
  //   let ref = '';
  // var postsRef = ref.child("parents");
  // var newPostRef = postsRef.push();
  // newPostRef.set({
  //   email: user.email,
  //   uid: user.uid
  // });

  // we can also chao90olin the two calls together
//   postsRef.push().set({
//     email: user.email,
//     uid: user.uid
//   });
// }
  // componentWillUnmount() {
  //   this.removeListener();
  // }

  render() {
    const { authed, pendingUser } = this.state;
  
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
        <React.Fragment>
          <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
            <div className="appContainer">
            <div className='row'>
              <Switch>
                <PrivateRoute path='/' exact component={Home} authed={this.state.authed} />
                <PrivateRoute path='/home' component={Home} authed={this.state.authed} />
                <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
              </Switch>
              </div>
              </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
