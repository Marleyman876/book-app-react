import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import { findAllByTestId } from '@testing-library/dom';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      name: '',
      author: '',
      description: '',
      isUpdating: false,
      updatingbook: ''
    } 
    console.log(props)
    if(props.bookUpdates){
      console.log(props.bookUpdates)
      this.state.name=props.bookUpdates.name
      this.state.author=props.bookUpdates.author
      this.state.description=props.bookUpdates.description
    }
  }

  handleCreateBooks = async (e) => {
    e.preventDefault();
    if (this.state.isUpdating) {
      axios.put(`${process.env.REACT_APP_DATABASE_URL}/books/${this.state.updatingBook}`, {
        name: this.state.name,
        author: this.state.author,
        description: this.state.description,
      }).then(res => {
        this.setState({
          books: res.data,
          isUpdating: false,
          name: '',
          author: '',
          description: ''
        });
      });
    } else {
      axios.post(`${process.env.REACT_APP_DATABASE_URL}/books`, {
        name: this.state.name,
        author: this.state.author,
        description: this.state.description,
        email: this.props.auth0.user.email,
      })
        .then(res => this.setState({
          books: res.data
        }))

      // this.props.updateBooks(.data);
      this.props.closeModal();
    }

  }


  render() {
    return (
      <>
        <Modal show={this.props.openModal} onHide={this.props.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={this.props.handleUpdate}>
              <Modal.Title id="contained-modal-title-vcenter">
                <h3>Add a New Book</h3>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={this.props.bookUpdates ? this.props.handleUpdate : this.props.newBooks}>
                <Form.Group controlId="bookName">
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control placeholder="Book Name" name='bookName' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="bookAuthor">
                  <Form.Label>Book Author</Form.Label>
                  <Form.Control placeholder="Book Author" name='author' value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="bookDescription">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control placeholder="Book Description" name='description' value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              {!this.props.bookUpdates ? <Button variant="primary" onClick={this.handleCreateBooks}>Add Book</     Button> :
                <Button type='submit' variant="primary" onClick={this.props.handleUpdate}>Update Book</Button>}
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default withAuth0(BookFormModal);
