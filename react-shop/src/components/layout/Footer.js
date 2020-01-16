import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import s1 from '../../img/s1.jpg'
import s3 from '../../img/s3.jpg'
import s5 from '../../img/s5.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Container style={{width:'100%', textAlign:'left'}} fluid='true'>
            <Row style={{marginTop:'2em', marginBottom: '2em'}}>
                <Col sm={6} lg={6}>
                <Image className='grid-image' src={s1}/>
                </Col>
                <Col sm={6} lg={6} xs={{order: 12}} style={{alignSelf: 'center'}}>
                    <h4>Bshop | Exlusive Boards</h4>
                    <p>
                        Blending an ultralight core with our best-selling shape, Bshop boards offers 
                        ravity-defying performance designed to inspire creativity and turn the mountain
                        into your canvas.
                    </p>
                    <Button variant='dark' as={Link} to='/boards'>Try now</Button>
                </Col>
            </Row>
            <Row style={{marginTop:'2em', marginBottom: '2em'}}>
                <Col sm={6, {order: 12}} lg={6} xs={6, {order: 12}} style={{alignSelf: 'center'}}>
                    <h4>Bshop | Warm board-jackets</h4>
                    <p>
                        Clothes for snowboarding should provide warmth and at the same time be light and free,
                        not restrict movements. It should protect from the wind and be waterproof, 
                        at the same time it should "breathe" at high loads, when the body sweats.
                        With our collection of warm jackets, you can always feel confident and easy
                    </p>
                    <Button variant='dark' as={Link} to='/jackets' >Try now</Button>
                </Col>
                <Col sm={6} lg={6, {order: 12}} md={6, {order: 12}}>
                    <Image className='grid-image' src={s3}/>
                </Col>
            </Row>
            <Row style={{marginTop:'2em', marginBottom: '2em'}}>
                <Col style={{alignSelf: 'center'}} sm={6} lg={6} xs={{order: 12}}>
                    <h4>Bshop | Premium Boots</h4>
                    <p>
                        The purchase of the first snowboard kit should begin with the boots,
                        because the choice of the right boots is the key to successful skiing. 
                        The pleasure of the skiing process, the improvement of technology, 
                        nd even the safety of a snowboarder depend on them in many respects.
                        When choosing shoes, you need to pay attention to several main criteria:
                        lacing, rigidity and mobility
                    </p>
                    <Button variant='dark' as={Link} to='/boots'>Try now</Button>
                </Col>
                <Col sm={6} lg={6}>
                   <Image className = 'grid-image' src={s5}></Image>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;