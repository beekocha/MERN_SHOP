import React, {useState, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Auth from '../auth/Auth';
import Register from '../auth/Register';
import basket from '../../img/basket.png';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth';
import PropTypes from 'prop-types';
const Navigation = ({ auth: { isAuthenticated}, logout}) => {
  //States for  rendering Modals
  const [showLog, setShowLog] = useState(false);
  const [showReg, setShowReg] = useState(false);
  //LOGOUT and Redirect

  return (
    <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/'>BShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse  id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/jackets'>JACKETS</Nav.Link>
                    <Nav.Link as={Link} to='/boots'>BOOTS</Nav.Link>
                    <Nav.Link as={Link} to='/boards'>BOARDS</Nav.Link>
                </Nav>    
                {isAuthenticated? 
                <Nav>
                    <Nav.Link as={Link} to='/basket'><img src={basket} alt='shop-basket-list'/></Nav.Link>
                    <Nav.Link 
                        style={{color: 'red'}}
                        onClick={()=>logout()}
                        as={Link}
                        to='/'>LOGOUT</Nav.Link>
                </Nav> :     
                <Nav>
                    <Auth showLog={showLog} setShowLog={setShowLog} setShowReg={setShowReg}/>
                    <Register showReg={showReg} setShowReg={setShowReg} setShowLog={setShowLog}/>
                </Nav>     } 
            </Navbar.Collapse>
            </Navbar>
    </Fragment>
  )
};

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {logout})(Navigation);