import React, {Fragment, useEffect, useState} from 'react';
import ShopLayout from '../shopLayout/ShopLayout';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


const Boots = () => {
  return(
    <Fragment>
        <h1 style={{display:'block', textAlign:'center'}}>BOOTS</h1>
        <ShopLayout section='boots'/>
    </Fragment>

  )
}

export default Boots;