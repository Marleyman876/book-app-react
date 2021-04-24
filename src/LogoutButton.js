import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function LogoutButton() {
  const {
    isAuthenticated,
  } = useAuth0();

  return !isAuthenticated && (<button>Logout</button>)
};


export default LogoutButton;
