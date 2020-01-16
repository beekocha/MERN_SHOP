import React, {Fragment, useEffect, useState} from 'react';
import ShopLayout from '../shopLayout/ShopLayout';
import SearchBox from '../shopLayout/SearchBox';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


const Boards = () => {


  return(
    <Fragment>
        <h1 style={{display:'block', textAlign:'center'}}>BOARDS</h1>
        <ShopLayout section='boards'/>
    </Fragment>
  )
}

export default Boards;