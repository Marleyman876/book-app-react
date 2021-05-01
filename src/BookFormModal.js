import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component {
  render() {
    return (

      <Modal show={this.props.openModal} onHide={this.props.closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3>Add a New Book</h3>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="bookName">
                <Form.Label>Book Name</Form.Label>
                <Form.Control placeholder="Book Name" />
              </Form.Group>

              <Form.Group controlId="bookAuthor">
                <Form.Label>Book Author</Form.Label>
                <Form.Control placeholder="Book Author" />
              </Form.Group>

              <Form.Group controlId="bookDescription">
                <Form.Label>Book Description</Form.Label>
                <Form.Control placeholder="Book Description" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.props.closeModal}>Add Book</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

    )
  }
}
