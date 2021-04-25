import React from 'react'
import Card from 'react-bootstrap/Card'
import { withAuth0 } from "@auth0/auth0-react";


class Profile extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <Card style={{ width: '15rem' }}>
        {isAuthenticated ? user.name : ''}
        {isAuthenticated ? <img src={user.picture} alt={user.name} />: ' '}
      </Card>
    )
  }
}
export default withAuth0(Profile);