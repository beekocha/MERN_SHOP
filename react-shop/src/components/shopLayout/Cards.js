import React, { Fragment, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Info from './Info';

const Cards = (props) => {
  const [show, setShow] = useState(false);
  return(
    <Fragment>
        <Card  style={{width:'15rem', margin:'0.5em', textAlign:'center'}}>
                <Card.Img  variant="top" src={props.pic} />
                <Card.Body style={{padding:'5px'}}>
                    <Card.Header style={{fontSize:"16px", backgroundColor:'white' }}>{props.name}</Card.Header>
                    <Card.Text style={{paddingTop:'5%'}} >
                        {props.desc}
                    </Card.Text>
                    <Info 
                          show={show}
                          setShow={setShow}
                          id={props.id}
                          name={props.name}
                          cost={props.cost}
                          pic={props.pic}
                          desc={props.desc}/>
                </Card.Body>
        </Card>
    </Fragment>
  );
}


export default Cards;