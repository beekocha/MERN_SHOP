import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Redux
import {addItem} from '../../redux/actions/basket';
import {connect} from 'react-redux';

const Info = ({show, setShow, name, desc, cost, pic, addItem, id}) => {
//Modal states
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let item = {
        id: id,
        name: name,
        desc: desc,
        pic: pic,
        cost: cost
    }
    const saveChanges = () => {
        return(
            addItem(item),
            handleClose()
        )
    }
//Basket-states
    return(
        <Fragment>
            <Button block variant='info' size='sm' onClick={handleShow}>
               Buy now for {cost}$
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid='true'>
                        <Col>
                            <Image src={pic}></Image>
                        </Col>
                        <Col>
                            <Row><b>Product ID: </b></Row>
                            <Row><b>Description: </b> {desc}</Row>
                            <Row><b>Cost:</b> {cost}$</Row>
                            <Row><b>Choose your size:</b></Row>
                        </Col>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                         Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
};

Info.propTypes = {
    addItem:PropTypes.func.isRequired
}

export default connect(null, {addItem})(Info);

