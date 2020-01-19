import React, {Fragment} from 'react';
import BasketCard from './BasketCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAll, buyAll } from '../../redux/actions/basket';
import Button from 'react-bootstrap/Button';

const Basket = ({basket, buyAll, deleteAll}) => {
    

    return (
        <Fragment>
            
                
            <div style={{display:'flex', flexWrap: 'wrap', alignContent:'center', justifyContent:'space-around'}}>
               { 
                basket.length ? basket.map((item) => 
                    <BasketCard id={item.id} name={item.name} cost={item.cost} pic={item.pic}/>)
                
                : <h1>You haven't bought anything yet</h1> 
               }
            </div>
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