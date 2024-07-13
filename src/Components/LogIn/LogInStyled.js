import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh",
  padding: "20px",
  boxSizing: "border-box",
});

export const LeftContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  maxWidth: "50%",
  marginLeft: "50px",
});

export const Title = styled("p")({
  color: "black",
  marginBottom: "10px",
  textAlign: "left",
  fontSize: "56px",
  fontFamily: "Arial, sans-serif",
});

export const Text = styled("p")({
  color: "black",
  marginBottom: "20px",
  marginTop: "0px",
  textAlign: "left",
  fontSize: "26px",
});

export const CustomButton = styled(Button)({
  color: "blue",
  textTransform: "none",
  fontSize: "14px",
  marginLeft: "100px",
  marginBottom: "0px",
  marginTop: "20px",
});

export const Image = styled("img")({
  maxWidth: "50%",
  height: "auto",
  marginRight: "340px  ",
});
