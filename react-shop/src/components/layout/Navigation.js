import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Auth from '../auth/Auth';
import Register from '../auth/Register';
import basket from '../../img/basket.png';

const Navigation = ({isAuthenticated}) => {
  //States for  rendering Modals
  const [showLog, setShowLog] = useState(false);
  const [showReg, setShowReg] = useState(false);
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
                <Nav>
                    <Nav.Link as={Link} to='/basket'><img src={basket} alt='shop-basket-list'/></Nav.Link>
                </Nav>       
                <Nav>
                    <Auth showLog={showLog} setShowLog={setShowLog} setShowReg={setShowReg}/>
                    <Register showReg={showReg} setShowReg={setShowReg} setShowLog={setShowLog}/>
                </Nav>      
            </Navbar.Collapse>
            </Navbar>
    </Fragment>
  )
};

export default Navigation;