import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = (props) => {

  const {
    isAuthenticated,
  } = useAuth0();

  return !isAuthenticated && (<button onClick={props.renderLogin}>Login</button>)
};


export default LoginButton;
