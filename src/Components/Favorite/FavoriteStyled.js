
import { Link } from "react-router-dom"
import  { styled, Box } from "@mui/material"

import {TableCell, TableRow}from "@mui/material"



  export const StyledTableCell = styled(TableCell)({
    color: "black",
    fontWeight: "bolder",
    fontStyle: "normal",
    fontSize: "0.9em",
    justifyContent: "space-between",
    padding: '10px',
    marginLeft: '20px',
  })
  
  // Black Table Cells for Home Page
  export const TableCellBlack = styled(TableCell)({
    color: "black",
  })
  
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