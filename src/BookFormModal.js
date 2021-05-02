import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class BookFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      author:'',
      description:''
    }
  }

  handleCreateBooks = async (e) => {
    e.preventDefault();
    const newBooks = await axios.post(`${process.env.DATABASE_URL}/books`, {
      name: this.state.name,
      author: this.state.author,
      description: this.state.description,
      
    })
       this.props.updateBooks(newBooks.data);

  }


  render() {
    return (
      <>
      <Modal show={this.props.openModal} onHide={this.props.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3>Add a New Book</h3>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.props.newBooks}>
              <Form.Group controlId="bookName">
                <Form.Label>Book Name</Form.Label>
                <Form.Control placeholder="Book Name" onChange = {(e) => this.setState({name:e.target.value})} />
              </Form.Group>

              <Form.Group controlId="bookAuthor">
                <Form.Label>Book Author</Form.Label>
                <Form.Control placeholder="Book Author"  onChange = {(e) => this.setState({author:e.target.value})} />
              </Form.Group>

              <Form.Group controlId="bookDescription">
                <Form.Label>Book Description</Form.Label>
                <Form.Control placeholder="Book Description"  onChange = {(e) => this.setState({description:e.target.value})} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.handleCreateBooks}>Add Book</Button>
            <Button variant="primary" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      </>
    )
  }
}


