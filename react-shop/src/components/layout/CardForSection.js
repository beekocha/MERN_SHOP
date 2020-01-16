import React from 'react';
import Card from 'react-bootstrap/Card';


const CardForSection = (props) => {
  return (
        <Card border='0' style={{textAlign:'center', borderRadius: '0'}}>
        <Card.Img id='boxImage'  variant="top" src={props.pic} style={{  borderRadius: '0' }}  />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
        </Card.Body>
        </Card>

  );
}


export default CardForSection;