// src/Components/Favorite/FavoriteStyled.js
import { Box, styled } from "@mui/material"

// Stiyled Box for center
export const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "700px",
  textAlign: "center",
})

// Styled img element
export const StyledImage = styled("img")({
  maxWidth: "100%",
  height: "400px",
})
//Styled Message under Photo
export const MessageText = styled("p")({
  marginTop: "5px",
  fontFamily: "Arial",
  fontSize: "15px",
})
////Styled CoinsLink text under MessageText
export const GoToCoinsLink = styled("p")({
  marginTop: "35px",
  cursor: "pointer",
  fontWeight: "bold",
  fontFamily: "Arial",
  fontSize: "20px",
})
