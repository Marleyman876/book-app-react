import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton'
import './Login.css';


class Login extends React.Component {

  render() {
    // alert(this.props.renderLogin);
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In.
          </Card.Text>
          <LoginButton /> 
          {/* {!this.props.isLoggedIn ? <LoginButton renderLogin={this.props.renderLogin}/> : ' '} */}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
