import React, { useState, Fragment } from "react";
// import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";


const Register = ({setShowReg, showReg, setShowLog}) => {
  // Register data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    }

    const showAndHide = () => {
      return (
       setShowReg(false),
       setShowLog(true)
      )
    }

  return (
    <Fragment>
      <Nav.Link onClick = {() => setShowReg(true)}>
        REGISTER
      </Nav.Link>
      <Modal
        show={showReg}
        onHide = {() => setShowReg(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{margin:'5px 0 5px 0'}}>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form onSubmit={e => onSubmit(e)}>
            {/* Name */}
            <Form.Group controlId="formBasicNameReg">
                <Form.Label >Your name</Form.Label>
                <Form.Control  
                  autoComplete="name" 
                  type="name" 
                  name='name' 
                  value={name}
                  onChange={e => onChange(e)}
                  placeholder="Enter your name"
                />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formBasicEmailReg">
                <Form.Label >Email address</Form.Label>
                <Form.Control
                  autoComplete="email"
                  type="email"
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder="Enter email" 
                />
            </Form.Group>

            {/* Password */}
            <Form.Group controlId="formBasicPasswordReg">
                <Form.Label> Password </Form.Label>
                <Form.Control 
                  autoComplete="current-password"
                  type="password"
                  name='password'
                  value={password}
                  onChange={e => onChange(e)}
                  placeholder="Password"
                />
              {/*Submit and Redirect  */}
            </Form.Group>
                <Button 
                  style={{marginTop:'2rem'}} 
                  variant="primary"
                  type="submit"
                  block
                >
                  Submit
                </Button>
                <a onClick={() => showAndHide()}>You have an account? Login</a>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default Register;