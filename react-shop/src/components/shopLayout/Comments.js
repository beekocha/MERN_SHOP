import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Comments = ({date, user, id, text, name, itemId, removeComment, auth}) => {
    
    const newDate = date.slice(0,10)
        return (
        <Fragment >
            <Card style={{width:'100%', margin:'5px'}} border='primary' user={user}>
                {auth.isAuthenticated && auth.user && auth.user !==null && user===auth.user._id ? (
                        <Button
                        onClick={() =>  removeComment(itemId, id)}
                        variant='danger'
                        style={{position:'absolute', right:'0px'}}
                        >
                        </Button>):null}
                <Card.Header style={{textAlign:'center'}}>{name}</Card.Header>
                <Card.Body>
                    {text}
                    <footer className="blockquote-footer">
                        {newDate}
                    </footer>
                </Card.Body>
            </Card>
        </Fragment>
    )
};
Comments.propTypes = {
    auth: PropTypes.object.isRequired,
    _id: PropTypes.string,
}
const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, null)(Comments);