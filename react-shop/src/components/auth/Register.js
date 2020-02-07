import React, { useState, Fragment } from "react";
// import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../redux/actions/auth';
import Alerts from '../layout/Alerts';
 

const Register = ({setShowReg, showReg, setShowLog, register, isAuthenticated, alerts}) => {
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
    register({ name, email, password });
    if(isAuthenticated) {
      setShowReg(false)
     }
    }

    const showAndHide = () => {
       setShowReg(false);
       setShowLog(true)
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
          {
            alerts.id ? <Alerts/> : null
          }
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
                  variant="success"
                  type="submit"
                  block
                >
                  Submit
                </Button>
                <Button onClick={() => showAndHide()} block variant='primary'>You have an account? Login</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alerts
});

export default connect(
  mapStateToProps,
  { register }
)(Register);