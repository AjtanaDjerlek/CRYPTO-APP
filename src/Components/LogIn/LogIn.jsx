import React from 'react';
import { Container, LeftContainer, Title, Text, CustomButton, Image } from './LogInStyled';
import glavnaImage from './images/Cryptomain.png';

export function LogIn() {
    return (
        <Container>
            <LeftContainer>
                <Title>But Bitcoin <br></br> & Crypto</Title>
                <Text>
                    Sign up today and <span style={{ color: 'red' }}>buy 50+</span><br></br> cryptocurrencies in minutes.<br />
                    Get started with as little as <span style={{ color: 'red' }}>$10</span>.
                </Text>
                <CustomButton variant="text">CRYPTO WALLET</CustomButton>
            </LeftContainer>
            <Image src={glavnaImage} alt="Crypto illustration" />
        </Container>
    );
}
