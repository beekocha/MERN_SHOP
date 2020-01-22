import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import p1 from '../../img/p1.jpg';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';
import scroll from '../../img/scroll.png';
import CardForSection from './CardForSection';

const Section = () => {
  return (
    <div>
        <h3 style={{marginTop:'50px', marginBottom:'30px', textAlign:'center'}}>WHAT'S ACTUAL NOW</h3>
        <Container style={{padding: '0', textAlign:'center'}} fluid='true'>
          <Row noGutters='true'>
          <Col lg={4} sm={4}><Link to='/boards'/><CardForSection text={'For each season we present a complete line of snowboards, and all of them are designed to make every turn, jump and touchdown as easy as possible!'} title={'Boards '} pic={p3} alt='Snowboards'/></Col>
          <Col lg={4} sm={4}><CardForSection text={'Snowboard boots are typically categorized as soft, medium or stiff. We have prepared only the best products for you! Go to our collection.'} title={'Boots'} url='/boots' pic={p2} alt='Boots for snowboarding'/></Col>
          <Col lg={4} sm={4}><CardForSection text={'A snowboard jacket is a necessary element of equipment for lovers of skiing and snowboarding. Go to our collection.'} title={'Jackets'} url='#' pic={p1} alt='Jackets for snowboarding'/></Col>
          </Row>
          <hr style={{backgroundColor:'black'}}/>
          <a href='#footer'>
              <img id='scroll' alt='scroll down' src={scroll}></img>
          </a>
        </Container>
    </div>
  );
};

export default Section;