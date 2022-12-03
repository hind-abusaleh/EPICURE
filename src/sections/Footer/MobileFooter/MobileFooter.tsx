import { MainContainer, Container } from './styles';
import React from 'react';
import { Link } from "react-router-dom";
function MobileFooter() {
    return (
        <MainContainer>
            <Container>
            <Link to="/" >Contact Us</Link>
            <Link to="/" >Term of Use</Link>
            <Link to="/" >Privacy Policy</Link>
        </Container>
    </MainContainer >

  );
}

export default MobileFooter;