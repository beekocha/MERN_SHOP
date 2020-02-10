import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Auth from '../auth/Auth';
import Register from '../auth/Register';
import b from '../../img/basket.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/Popover';
import PopOverlay from './PopOverlay';
const Navigation = ({ auth: { isAuthenticated}, logout, basket}) => {
  //States for  rendering Modals
  const [showLog, setShowLog] = useState(false);
  const [showReg, setShowReg] = useState(false);

  const popover = (
    <Popover id="popover-basic" outOfBoundaries>
      <Popover.Title as="h3">Your purchase</Popover.Title>
       <PopOverlay />
    </Popover>
  );

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
                    <Nav.Link as={Link} to='/basket'>
                      
                    <OverlayTrigger 
                      placement="bottom"
                      flip
                      delay={{ show: 250, hide: 400 }}
                      trigger="hover"
                      overlay={popover}
                    >
                    <img src={b} alt='shop-basket-list'/>
                    </OverlayTrigger>
                    {basket.length}
                    </Nav.Link>
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
    auth: PropTypes.object.isRequired,
    basket: PropTypes.array.isRequired,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    basket: state.basket
  });

export default connect(mapStateToProps, {logout})(Navigation);