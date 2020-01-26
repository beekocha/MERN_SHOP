import React, {Fragment} from 'react';
import ShopLayout from '../shopLayout/ShopLayout';

const Boards = () => {
  return(
    <Fragment>
        <h1 style={{display:'block', textAlign:'center'}}>BOARDS</h1>
        <ShopLayout section='boards'/>
    </Fragment>
  )
}

export default Boards;