import { styled } from "@mui/system"
import {
  Container,
  TableContainer,
  TableCell,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material"
import { Typography } from "@mui/material"

// Main Container for Home Page
export const StyledContainer = styled(Container)({
  padding: "20px",
  backgroundColor: "white",
  color: "white",
  minHeight: "100vh",
  maxWidth: "90vw",
  margin: "auto",
  position: "relative",
})

// Typography for Heading
export const StyledTypography = styled(Typography)({
  position: "absolute",
  top: "-5px",
  left: "0",
  marginBottom: "0",
  color: "black",
})

// Heading Text Container
export const HeadingText = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  fontWeight: "1300",
})

// top 10 text style
export const Top10 = styled("p")({
  fontWeight: "900",
})

// "List" Text Style
export const List = styled("p")({
  color: "red",
  fontWeight: "900",
})

// Style for Search Icon
export const SearchIconStyle = {
  color: "grey",
}

// Style for Input Props
export const InputPropsStyle = {
  color: "rgb(209 213 219 / var(--tw-text-opacity, 1))",
  height: "40px",
  "--tw-text-opacity": "1",
}

// Style for Text Field
export const StyledTextField = styled(TextField)({
  backgroundColor: "rgba(55 ,65, 81, var(--tw-text-opacity, 1))",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
})

// Text Field Styles
export const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}

// Style for Table Container
export const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "white",
  width: "100%",
  margin: "0 auto",
  marginTop: "30px",
})

// Style for Table Cells
export const StyledTableCell = styled(TableCell)({
  color: "black",
  fontWeight: "bolder",
  fontStyle: "italic",
  fontSize: "1em",
})

// Black Table Cells for Home Page
export const TableCellBlack = styled(TableCell)({
  color: "black",
})

// Coin Icon Style
export const CoinIcon = styled("img")({
  width: "40px",
  marginRight: "10px",
})

// Bold Text Style
export const BoldText = {
  fontWeight: "bold",
}

// Red Text Style
export const RedText = {
  color: "red",
  fontWeight: "bold",
}

// Chart Icon Style
export const ChartIcon = {
  color: "black",
}

// Dialog Styles
export const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    padding: "20px",
    maxWidth: "600px",
    width: "100%",
  },
})

export const StyledDialogTitle = styled(DialogTitle)({
  backgroundColor: "#f5f5f5",
  color: "#333",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
})

export const StyledDialogContent = styled(DialogContent)({
  padding: "20px",
})

export const StyledDialogActions = styled(DialogActions)({
  justifyContent: "space-between",
})

export const StyledDialogTextField = styled(TextField)({
  marginBottom: "15px",
})

export const StyledDialogCalculationContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
})

export const StyledDialogCalculationItem = styled(Box)({
  flex: "1",
})

// Style for Price Chart Image
export const PriceChartImage = styled("img")({
  width: "50px",
  height: "30px",
  objectFit: "cover",
})

export const HeartIcon = styled("svg")({
  width: "20px",
  height: "20px",
  color: "red",
  cursor: "pointer",
  display: "flex",

  alignItems: "center",
  "& path": {
    fill: "currentColor",
    transition: "fill 0.3s ease",
  },
  "&:hover": {
    color: "darkred",
  },
})

export const ImgStyled = styled("img")`
  width: 35vw;
  height: 60vh;
`
export const ImgDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`
