import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import Header from './Header';
import Login from './Login';
import Bookshelf from './Bookshelf'
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    }
  }

  renderLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }
  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header
              isLoggedIn={this.state.isLoggedIn}
            />

            <Switch>
              <Route exact path="/">
                <Login
                  isLoggedIn={this.state.isLoggedIn}
                  renderLogin={this.renderLogin}
                />
                {!this.state.isLoggedIn ? '' : <Bookshelf/>}
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}

              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
