import React, { useState, Fragment } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../redux/actions/auth';
import Alerts from '../layout/Alerts';
 
const Auth = ({setShowReg, setShowLog, showLog, login, isAuthenticated, alerts}) => {
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
    login(email, password);
    if(isAuthenticated){
      setShowLog(false);
    }
  }

  const showAndHide = () => {
     setShowLog(false);
     setShowReg(true)
  
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
        {
          alerts.id ? <Alerts/> : null
        }
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
                    variant="success"
                    block type="submit"
              >
                Submit
              </Button>
              <Button onClick = {() => showAndHide()} block variant="primary">Register</Button>
          </Form>
          <footer>To try out my apllication: admin@gmail.com | 12345</footer>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

Auth.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alerts
});


export default connect(mapStateToProps, {login})(Auth);