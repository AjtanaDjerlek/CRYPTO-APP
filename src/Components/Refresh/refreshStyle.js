import { grey } from "@mui/material/colors"

export const Site = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: grey[500],
  fontFamily: "Roboto, sans-serif", // Ensure Roboto is applied to all text within this component
}

export const MidText = {
  border: "1px solid black",
  backgroundColor: "white",
  color: "black",
  width: "30vw",
  height: "40vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  fontFamily: "Roboto, sans-serif",
  padding: "40px",
  borderRadius: "10px",
  textAlign: "start",
  fontSize: "17px",
  fontWeight: 700,
}

export const Line = {
  border: "1px solid black",
  width: "90%",
  height: "1px",
  marginTop: "20px",
  marginBottom: "20px",
  fontFamily: "Roboto, sans-serif",
}
