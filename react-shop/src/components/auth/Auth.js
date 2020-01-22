import React, { useState, Fragment } from "react";
// import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";

const Auth = ({setShowReg, setShowLog, showLog}) => {
  // Changing data in login-form
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
      
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // email, password;
  }

  const showAndHide = () => {
    return (
     setShowLog(false),
     setShowReg(true)
    )
  }

  //Rendering Login-modal
  return (
    <Fragment>
      <Nav.Link  onClick={() => setShowLog(true)}>
        LOGIN
      </Nav.Link>
      <Modal
        show={showLog}
        onHide={()=>setShowLog(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{margin:'5px 0 5px 0', textAlign:'center'}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form onSubmit={e => onSubmit(e)}>

            {/* Email */}
            <Form.Group controlId="formBasicEmailReg">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                    autoComplete="email" 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    placeholder="Enter email" 
              />
            </Form.Group>

              {/* Password */}
            <Form.Group controlId="formBasicPasswordReg">
              <Form.Label>Password</Form.Label>
              <Form.Control  
                    autoComplete="current-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => onChange(e)}
                    required
              />
              </Form.Group>

              {/* Submit and Redirect */}
              <Button style={{marginTop:'2rem'}}
                    variant="primary"
                    block type="submit"
              >
                Submit
              </Button>
              <a onClick = {() => showAndHide()} href='#'>Don't have an account yet? Register!</a>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default Auth;