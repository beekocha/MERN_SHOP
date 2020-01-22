import React, {Fragment} from 'react';
import BasketCard from './BasketCard';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { deleteAll, buyAll } from '../../redux/actions/basket';
import Button from 'react-bootstrap/Button';
import Jumbo from './Jumbo'

const Basket = ({basket, buyAll, deleteAll}) => {
    const countTotal = () => {
       return basket.reduce((accum, itemValue) => {return accum+itemValue.cost},0)
    }
 
    return (
        <Fragment>
            <div style={{display:'flex',
                         flexWrap: 'wrap',
                         alignContent:'center',
                         justifyContent:'space-around',
                         flexDirection:'column',
                         padding:'10px',
                         margin: '10px'
                        }}>
                <Row style={{display:'flex', flexDirection:'column'}}>
                    <h1>Total is: {countTotal()} </h1>
                    <div>
                    <Button variant='danger' onClick={()=>deleteAll()}>Delete</Button>
                    <Button variant='success' onClick={()=>buyAll()}>Buy</Button>
                    </div>
                </Row>
                <Row>
               { 
                basket.length ? basket.map((item) => 
                    <BasketCard id={item.id} name={item.name} cost={item.cost} pic={item.pic}/>)
                
                : <div>
                    <h1>You haven't bought anything yet</h1>
                    <img src=''></img>
                </div> 
                
               }
               </Row>
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