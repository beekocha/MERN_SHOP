import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

const Jumbo = () => {
    return(
        <Jumbotron id='jumbo'>
            <Container><h2>You haven't bought anything yet</h2>
            <h3>But You can!</h3>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo;