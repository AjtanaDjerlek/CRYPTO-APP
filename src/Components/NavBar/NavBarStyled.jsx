import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import PersonPinIcon from "@mui/icons-material/PersonPin"
import Logo from "./images/cryplogo.png"

const NavbarContainer = styled(Box)({
  "--tw-bg-opacity": "1",
  height: "60px",

  display: "flex",
  // position: "fixed",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 200px",
  backgroundColor: "rgb(30 41 59 / var(--tw-bg-opacity))",
  fontFamily: "'Roboto', sans-serif",
  top: 0,
  width: "78%",
  zIndex: 1000,
})

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
})

const LogoImage = styled("img")({
  width: 50,
  height: 40,
})

const NavLinks = styled(Box)({
  "--tw-bg-opacity": "1",
  display: "flex",
  flexWrap: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  paddingLeft: "20px",
  gap: 20,
  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity))",
  height: "55px",
  width: "470px",
  borderRadius: 10,
})

const StyledLink = styled(Link)({
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))",
  textDecoration: "none",
  fontSize: "1em",
  fontWeight: 600,
  "&:hover": {
    color: "whitesmoke",
  },
})

const ProfileIcon = styled(Avatar)({
  color: "white",
  backgroundColor: "transparent",
  fontSize: "1.5em",
  display: "flex",
  flexWrap: "row",
})

const NavbarStyled = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
        <Typography variant="h6" color="white" ml={0} fontWeight={700}>
          CRYPTO-APP
        </Typography>
      </LogoContainer>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/coins">Coins</StyledLink>
        <StyledLink to="/about-us">About Us</StyledLink>
        <StyledLink to="/favorite">Favorite</StyledLink>
      </NavLinks>
      <ProfileIcon>
        <PersonPinIcon />
        {/* <Link to="/log-in">LogIn</Link> */}
      </ProfileIcon>
    </NavbarContainer>
  )
}

export default NavbarStyled
