import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import Header from './Header';
import Login from './Login';
import Bookshelf from './Bookshelf';
import BestBooks from './BestBooks';
import Profile from './Profile'
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {

  render() {
    const {isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header
              isAuthenticated={isAuthenticated}
            />

            <Switch>
              <Route exact path="/">

                {!isAuthenticated ? <Login/> : <BestBooks />}
                
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              </Route>

              <Route exact path="/profile">
                {!isAuthenticated ? '' : <Profile />}
              </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
