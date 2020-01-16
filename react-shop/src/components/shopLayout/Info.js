import React, { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Info = ({show, setShow, name, desc, cost, pic, addProduct}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <Row><b>Description: </b> {desc}</Row>
                            <Row><b>Cost:</b> {cost}$</Row>
                            <Row><b>Choose your size:</b></Row>
                        </Col>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
                         Close
                    </Button>
                    <Button variant="primary" onClick={addProduct}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
};

export default Info;

