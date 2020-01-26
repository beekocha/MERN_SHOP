import React, {Fragment, useState} from 'react';
import BasketCard from './BasketCard';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { deleteAll, buyAll } from '../../redux/actions/basket';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Basket = ({basket, buyAll, deleteAll}) => {
    const [ifempty, setIfempty] = useState(`You haven't bought anything yet`)
    const countTotal = () => {
       return basket.reduce((accum, itemValue) => {return accum+itemValue.cost},0)
    }
    const remove = () => {
        return(
            deleteAll(),
            setIfempty(`You haven't bought anything yet`)
            )
    }
    const order = () => {
        if(basket.length>0){
            return(
                buyAll(),
                setIfempty('The purchase was successful! Thanks for your order!')
            )
        }
        else {
            return (setIfempty('Please, add product to your basket for ordering!'))
        }
    }
    return (
        <Fragment>
            <h1 style={{display:'block', textAlign:'center'}}>BASKET</h1>
            <Container>
                <Row style={{display:'flex', placeContent: 'center'}}>
                    <h2>Total is: {countTotal()} </h2>
                    <div>
                    <Button variant='danger' onClick={remove}>Delete</Button>
                    <Button variant='success' onClick={order}>Buy</Button>
                    </div>
                </Row>
                <Row style={{display:'flex',
                         alignContent:'center',
                         flexWrap:'wrap',
                         justifyContent:'space-around',
                         padding:'10px',
                         margin: '10px'
                        }}>
                { 
                    basket.length ? basket.map((item) => 
                        <BasketCard id={item.id} name={item.name} cost={item.cost} pic={item.pic}/>)
                    
                    : <div>
                        <h1>{ifempty}</h1>
                    </div>                   
                }
                </Row>
            </Container>
        </Fragment>
    );
}

Basket.propTypes = {
    basket: PropTypes.array.isRequired,
    deleteAll: PropTypes.func.isRequired,
    buyAll: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    basket: state.basket,
})

export default connect(mapStateToProps, {deleteAll, buyAll})(Basket);