import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import {connect} from 'react-redux';

const AddComment = ({addComment, id, auth, setAlert}) => {
    const [text, setText] = useState('')     
    console.log(id, "ID - Add text");
    console.log(text, "TEXT - Add comment");   
    return (
        <Fragment >
            <Form  style={{width:'100%'}}   
             onSubmit={e => {
                e.preventDefault();
                if(auth.isAuthenticated===true){
                    addComment(id, {text});
                    setText('');
                } else {
                    setAlert('Please, login!', 'warning')
                }
              }}>
                <FormGroup>
                <Form.Label>Your Comment</Form.Label>
                <FormControl
                    name="text"
                    placeholder="Your text is here"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                    aria-label="Amount (to the nearest dollar)"
                />
                <Button type='submit' variant='primary' style={{marginTop:'10px', direction:'right'}}>Comment</Button>
                </FormGroup>
            </Form>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AddComment);