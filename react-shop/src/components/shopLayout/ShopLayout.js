import React, { Fragment, useState, useEffect } from 'react';
import Cards from './Cards';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import axios from 'axios'

const ShopLayout = ({section}) => {
   const [items, setItems] = useState([])
    const getItems = () => {
            axios.get('/api/items').then( res => setItems(res.data)).catch(error => error)
    }
    useEffect(() => {
        getItems()
      }, []);

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
                { items.filter((value) => value.section === section)
                        .filter(({name}) => name.toLowerCase()
                        .includes(search.toLowerCase()))
                        .map(({pic, desc, cost, name, _id, comments}) => (
                           <Cards key={_id} id={_id} desc={desc} cost={cost} pic={pic} name={name} comments={comments} 
                           updateFunc={getItems}/>
                        )) 
                }
                </div>
            </div>
        </div>
      </Fragment>
    );
};

export default ShopLayout;