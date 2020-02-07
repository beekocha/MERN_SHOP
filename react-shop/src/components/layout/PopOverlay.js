import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/Popover';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const PopOverlay = ({basket}) => {
    return (
            <Popover.Content style={{ overflow: 'auto', maxHeight:'300px'}}>
                { basket.length>0 ? basket.map(item => 
                    <Row key={item.id} style={{maxWidth:'100%', padding:'2px', margin:'2px'}}>
                        <Image src={item.pic} alt='Your purchase' style={{maxWidth:'20%'}}/>
                        <p>{item.desc}</p>
                    </Row>) : <p>Buy something!</p>}
            </Popover.Content>
    )
}

PopOverlay.propTypes = {
    basket: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    basket: state.basket
})

 export default connect(mapStateToProps)(PopOverlay);
