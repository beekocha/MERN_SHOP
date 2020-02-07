import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './Comments';
import Alerts from '../layout/Alerts';
import AddComment from './AddComment';
//Redux
import {addItem} from '../../redux/actions/basket';
import {connect} from 'react-redux';
import { setAlert } from '../../redux/actions/alerts';
import axios from 'axios'

const Info = ({
    show,
    setShow,
    name,
    desc,
    cost,
    pic,
    addItem,
    id,
    comments,
    updateFunc,
    auth: { isAuthenticated},
    setAlert}) => {

//Modal states
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let item = {
        id: id,
        name: name,
        desc: desc,
        pic: pic,
        cost: cost,
        comments:comments
    }

    const removeComment = async (id, _id) => {
        try {
          await axios.delete(`/api/items/comment/${id}/${_id}`);
          updateFunc();    
          setAlert('Comment Removed', 'success');
        } catch (err) {
            console.log({ msg: err.response.statusText, status: err.response.status });
            setAlert( err.response.statusText, 'danger')
        }
      };

    const  addComment = async (id, formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
           await axios.post(
            `/api/items/comment/${id}`,
            formData,
            config
            );
            updateFunc();
           setAlert('Comment Added', 'success')
        } catch (err) {
            console.log({ msg: err.response.statusText, status: err.response.status });
            setAlert( err.response.statusText, 'danger')
        }
    }

    const saveChanges = async e => {
        e.preventDefault();
        if(isAuthenticated===true){
            addItem(item);
            handleClose();
        } else {
           setAlert('You are not authorized', 'danger', 1000)
        }
    }
    return(
        <Fragment>
            <Button block variant='info' size='sm' onClick={handleShow}>
               Buy now for {cost}$
            </Button>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alerts/>
                    <Container fluid='true'>
                        <Row>
                        <Col md={{size:6,order: 1}}>
                            <Row>
                                <Image src={pic}></Image>
                            </Row>
                            <Col>
                                <Row><b>Description: </b> {desc}</Row>
                                <Row><b>Cost:</b> {cost}$</Row>
                            </Col>
                        </Col>
                        <Col md={{size:6,order: 12}} style={{overflow:'auto', maxHeight:'400px'}} sm={{order: 12}}>
                            <Row><h3>Comments:</h3></Row>
                            <Row>
                             {comments.map((comment) => 
                             <Comments id={comment._id} 
                                user={comment.user}
                                text={comment.text}
                                name={comment.name}
                                date={comment.date}
                                itemId={item.id}
                                removeComment={removeComment}
                                key={comment._id}
                                />
                             )}
                            </Row>
                            <Row style={{flex:'block', flexDirection:'flex-end'}}>
                                <AddComment id={item.id} key={id} setAlert={setAlert} addComment={addComment}/>
                            </Row>
                        </Col>
                        </Row>
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
    addItem:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
  });
export default connect(mapStateToProps, {addItem, setAlert})(Info);