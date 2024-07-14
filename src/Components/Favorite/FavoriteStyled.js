// src/Components/Favorite/FavoriteStyled.js
import { Box, styled } from "@mui/material"
import { Link } from "react-router-dom"

// Stiyled Box for center
export const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  textAlign: "center",
})

// Styled img element
export const StyledImage = styled("img")({
  maxWidth: "100%",
  height: "500px",
})
//Styled Message under Photo
export const MessageText = styled("p")({
  marginTop: "5px",
  fontFamily: "Arial",
  fontSize: "15px",
})
////Styled CoinsLink text under MessageText
export const GoToCoinsLink = styled(Link)({
  marginTop: "35px",
  cursor: "pointer",
  fontWeight: "bold",
  fontFamily: "Arial",
  fontSize: "20px",
  textDecoration: "none",
  color: "black",
  marginBottom: "50px",
})
