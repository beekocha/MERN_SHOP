import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import basket from '../../img/basket.png';
import Container from 'react-bootstrap/Container';
import Cards from '../shopLayout/Cards';
import {product} from '../pages/product';

const Basket = () => {
    const [basketlist, setBasketlist] = useState([]);
    const addProduct = (value) => {
        setBasketlist(basketlist.push(value))
    }
    return (
        <Fragment>
            <div style={{display:'flex', flexWrap: 'wrap', alignContent:'center', justifyContent:'space-around'}}>
                {product.map(({id, pic, desc, cost, name}, i) => (
                    <Cards addProduct={addProduct} key={id} desc={desc} cost={cost} pic={pic} name={name}/>
                    ))
                }
            </div>
        </Fragment>
    );
}

export default Basket;