import React, { useContext, useState } from "react";
import { MyDataContext } from "../../Context/Provider";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  TextField,
  Box,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SearchIcon from "@mui/icons-material/Search";
import CalculateIcon from "@mui/icons-material/Calculate"; // Import the CalculateIcon
import {
  StyledContainer,
  StyledTypography,
  HeadingText,
  Top10,
  List,
  SearchIconStyle,
  InputPropsStyle,
  StyledTextField,
  textFieldSx,
  StyledTableContainer,
  StyledTableCell,
  TableCellBlack,
  CoinIcon,
  BoldText,
  RedText,
  ChartIcon,
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  StyledDialogTextField,
  StyledDialogCalculationContainer,
  StyledDialogCalculationItem,
} from "./HomeStyled";

export function Home() {
  // Usestate for data, catching errors, and loading
  const { data, loading, error, setCoin } = useContext(MyDataContext);

  // Usestate for searchbars
  const [searchQuery, setSearchQuery] = useState("");

  // Usestate for dialog
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);

  // Loading icons
  if (loading) {
    return <CircularProgress style={{ color: "white" }} />;
  }

  // Error handler
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Filtering data
  const filteredCoins = data.data.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addItemToDetailPage = (item) => {
    setCoin(item);
  };

  const handleSearchIconClick = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setAmount("");
    setTotal("");
    setSelectedCoin(null); // Reset the selected coin
  };

  const handleCalculate = () => {
    if (amount && selectedCoin) {
      const totalAmount = (amount * parseFloat(selectedCoin.price)).toFixed(2);
      setTotal(totalAmount);
    }
  };

  const handleOpenDialog = (coin) => {
    setSelectedCoin(coin);
    setOpen(true);
  };

  return (
    <StyledContainer>
      {/* Heading */}
      <StyledTypography variant="h5" component="div" gutterBottom>
        <HeadingText>
          <Top10>Top 10 </Top10>
          <List>List</List>
        </HeadingText>
      </StyledTypography>
      {/* Search */}
      <Box display="flex" justifyContent="center" mb={2}>
        <StyledTextField
          variant="outlined"
          placeholder="Search cryptos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleSearchIconClick} style={SearchIconStyle}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            style: InputPropsStyle,
          }}
          inputProps={{ style: InputPropsStyle }}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={textFieldSx}
        />
      </Box>
      {/* Table */}
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {["Rank", "Icon", "Name", "Price", "24h Volume", "MarketCap"].map((header) => (
                <StyledTableCell key={header}>{header}</StyledTableCell>
              ))}
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Display top 10 coins */}
            {filteredCoins.slice(0, 10).map((coin) => (
              <TableRow key={coin.id}>
                <TableCellBlack>{coin.rank}</TableCellBlack>
                <TableCellBlack onClick={() => addItemToDetailPage(coin)}>
                  <Link to="/coin-details">
                    <CoinIcon src={coin.iconUrl} alt={coin.name} />
                  </Link>
                </TableCellBlack>
                <TableCellBlack>{coin.name}</TableCellBlack>
                <TableCellBlack style={BoldText}>
                  ${parseFloat(coin.price).toFixed(2)}
                </TableCellBlack>
                <TableCellBlack style={BoldText}>
                  ${parseFloat(coin["24hVolume"]).toLocaleString()}
                </TableCellBlack>
                <TableCellBlack style={BoldText}>
                  ${parseFloat(coin.marketCap).toLocaleString()}
                </TableCellBlack>
                <TableCellBlack style={BoldText}>
                  <ShowChartIcon style={ChartIcon} />
                </TableCellBlack>
                <TableCellBlack style={RedText}>
                  <FavoriteIcon />
                </TableCellBlack>
                <TableCellBlack style={BoldText}>
                  <IconButton onClick={() => handleOpenDialog(coin)} style={ChartIcon}>
                    <CalculateIcon style={{color:"blue"}} />
                  </IconButton>
                </TableCellBlack>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Dialog for calculations */}
      <StyledDialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <StyledDialogTitle>
          {selectedCoin ? (
            <>
              {selectedCoin.name} <img src={selectedCoin.iconUrl} alt={selectedCoin.name} style={{ width: '24px', marginLeft: '10px' }} />
            </>
          ) : "Crypto Details"}
        </StyledDialogTitle>
        <StyledDialogContent>
          {selectedCoin && (
            <StyledDialogCalculationContainer>
              <StyledDialogCalculationItem>
                <StyledDialogTextField
                  type="number"
                  fullWidth
                  margin="normal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </StyledDialogCalculationItem>
              <Typography variant="h6" gutterBottom>
                X
              </Typography>
              <StyledDialogCalculationItem>
                <Typography variant="h6" gutterBottom>
                  ${parseFloat(selectedCoin.price).toFixed(3)}
                </Typography>
              </StyledDialogCalculationItem>
              <Typography variant="h6" gutterBottom>
                =
              </Typography>
              <StyledDialogCalculationItem>
                <StyledDialogTextField
                  type="text"
                  fullWidth
                  margin="normal"
                  value={total}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </StyledDialogCalculationItem>
            </StyledDialogCalculationContainer>
          )}
        </StyledDialogContent>
        <StyledDialogActions>
          <Button onClick={handleCalculate} color="primary">
            Calculate
          </Button>
          <Button onClick={handleCloseDialog} color="secondary">
            Close
          </Button>
        </StyledDialogActions>
      </StyledDialog>
    </StyledContainer>
  );
}
