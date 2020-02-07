import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/actions/basket';
import PropTypes from 'prop-types';

const BasketCard = ({deleteItem, pic, name, cost, id}) => {

  return(
    <Fragment>
        <Card id={id} style={{width:'15rem', margin:'0.5em', textAlign:'center'}}>
                <Card.Img  src={pic} />
                <Card.Body style={{padding:'5px'}}>
                    <Card.Header style={{fontSize:"16px", backgroundColor:'white' }}>{name}</Card.Header>
                    <Card.Text>
                        {cost}$
                    </Card.Text>
                    <Button variant='danger' block size='sm' onClick={() => deleteItem(id)}>Delete</Button>
                </Card.Body>
        </Card>
    </Fragment>
  );
}

BasketCard.propTypes = {
  deleteItem: PropTypes.func.isRequired,
}


export default connect(null, {deleteItem})(BasketCard);