import React from 'react';
import { FooterContainer, FooterNav, FooterLink, FooterText } from './FooterStyled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterLink>Website</FooterLink>
        <FooterLink>Users</FooterLink>
        <FooterLink>Coins</FooterLink>
        <FooterLink>Exchanges</FooterLink>
      </FooterNav>
      <FooterText>
        Crypto app made by: Senad Zukorlić, Ajtana Đerlek, Ermin Muslić, Amer Salković;
      </FooterText>
      <FooterText>
        © 2024 Crypto App
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
