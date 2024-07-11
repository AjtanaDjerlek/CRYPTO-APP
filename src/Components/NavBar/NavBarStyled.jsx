import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Logo from "./images/cryplogo.png";

const NavbarContainer = styled(Box)({
  height: '60px',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#2d3748",
  fontFamily: "'Roboto', sans-serif",
});

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const LogoImage = styled("img")({
  width: 50,
  height: 40,
});

const NavLinks = styled(Box)({
  display: "flex",
  gap: 30, // Povećan razmak između linkova
});

const NavLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontSize: "1em",
  fontWeight: 700,
  "&:hover": {
    color: "#e53e3e",
  },
});

const ProfileIcon = styled(Avatar)({
  color: "white",
  backgroundColor: "transparent",
  fontSize: "1.5em",
});

const NavbarStyled = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
        <Typography variant="h6" color="white" ml={2} fontWeight={700}>
          CRYPTO-APP
        </Typography>
      </LogoContainer>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Coins</NavLink>
        <NavLink href="#">Exchanges</NavLink>
        <NavLink href="#">About Us</NavLink>
      </NavLinks>
      <ProfileIcon>
        <PersonPinIcon />
      </ProfileIcon>
    </NavbarContainer>
  );
};

export default NavbarStyled;
