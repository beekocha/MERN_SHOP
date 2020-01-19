import React, { Fragment, useState } from 'react';
import Cards from './Cards';
import {product} from '../pages/product';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const ShopLayout = ({section}) => {

    const [search, setSearch] = useState('');
    const searchChange = (event) => {
        setSearch(event.target.value);
    }

    return (
      <Fragment>
        <div style={{margin:'20px'}}>
            <div >
                <Form style={{margin:'10px', display:'flex', placeContent:'center'}}>
                    <FormControl  
                        style={{width:"200px"}} 
                        type="text"
                        placeholder="Search" 
                        onChange={searchChange}
                        value={search}
                    />
                </Form>
         
                <div style={{display:'flex', flexWrap: 'wrap', alignContent:'center', justifyContent:'space-around'}}>
                {product.filter((value) => value.section === section)
                        .filter(({name}) => name.toLowerCase()
                        .includes(search.toLowerCase()))
                        .map(({pic, desc, cost, name, id}) => (
                           <Cards id={id} desc={desc} cost={cost} pic={pic} name={name}/>
                        ))
                }
                </div>
            </div>
        </div>
      </Fragment>
    );
};

export default ShopLayout;