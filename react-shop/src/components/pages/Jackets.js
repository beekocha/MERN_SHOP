import React, {Fragment, useEffect, useState} from 'react';
import ShopLayout from '../shopLayout/ShopLayout';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";



const Jackets = () => {
  return(
    <Fragment>
        <h1 style={{display:'block', textAlign:'center'}}>JACKETS</h1>
        <ShopLayout section='jackets'/>
    </Fragment>

  )
}

export default Jackets;