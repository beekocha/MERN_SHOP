import React, { Fragment, useState, useEffect } from 'react';
import Cards from './Cards';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/items'

const ShopLayout = ({section, items, getItems}) => {
    useEffect(() => {
        getItems();
      }, [getItems]);
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

ShopLayout.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}

const mapStateToProps = state => {return{
    items: state.items
}}
const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItems()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopLayout);