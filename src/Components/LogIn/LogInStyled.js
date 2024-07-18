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
  lineHeight: "1.5",
});

export const CustomButton = styled(Button)({
  color: "blue",
  textTransform: "none",
  fontSize: "14px",
  marginBottom: "20px",
  marginTop: "0px",
});

export const Image = styled("img")({
  maxWidth: "50%",
  height: "auto",
  marginRight: "20px",
});

export const CoinInfo = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "10px",
  marginTop: "20px",
  "& img": {
    marginRight: "10px",
  },
  "& div": {
    textAlign: "left",
    "& p": {
      margin: "0",
      fontSize: "18px",
      color: "black",
    },
  },
});
