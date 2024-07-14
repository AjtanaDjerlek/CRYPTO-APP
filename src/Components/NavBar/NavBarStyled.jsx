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
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 200px",
  backgroundColor: "rgb(30 41 59 / var(--tw-bg-opacity))",
  fontFamily: "'Roboto', sans-serif",
  top: 0,
  width: "81%",
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

const HeartIcon = styled(Link)({
  width: "20px",
  height: "20px",
  color: "#f56565",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& svg": {
    width: "100%",
    height: "100%",
  },
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

        <HeartIcon to="/favorite">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
            ></path>
          </svg>
        </HeartIcon>
      </NavLinks>
      <ProfileIcon>
        <Link to="/log-in">
          <PersonPinIcon style={{ color: "white" }} />
        </Link>
      </ProfileIcon>
    </NavbarContainer>
  )
}

export default NavbarStyled
