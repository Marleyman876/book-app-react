import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    try {
      const SERVER = process.env.DATABASE_URL || 'http://localhost:3001';
      const reader = await axios.get(`${SERVER}/books`,
        {
          params: {
            email: this.props.auth0.user.email
          }
        });
      console.log(reader.data);
      this.setState({ books: reader.data[0].books });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
      <h2>Best Books</h2>
        {this.state.books.length > 0 &&
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id} style={{ width: '35rem' }}>
                <Image
                  fluid
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Book"
                />
                <Carousel.Caption>
                  <p>{book.name}</p>
                  <p>{book.author}</p>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        }
      </>
    )
  }
}

export default withAuth0(BestBooks);