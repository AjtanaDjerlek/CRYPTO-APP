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
import { Line } from 'react-chartjs-2';
import SearchIcon from "@mui/icons-material/Search";
import CalculateIcon from "@mui/icons-material/Calculate";
import {
  StyledContainer,
  StyledTypography,
  HeadingText,
  Top10,
  List,
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
  const { data, loading, error, setCoin } = useContext(MyDataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);

  if (loading) {
    return <CircularProgress style={{ color: "white" }} />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
    setSelectedCoin(null);
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

  const createChartData = (sparkline) => ({
    labels: sparkline.map((_, index) => index),
    datasets: [
      {
        label: 'Price',
        data: sparkline,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
      },
    ],
  });

  return (
    <StyledContainer>
      <StyledTypography variant="h5" component="div" gutterBottom>
        <HeadingText>
          <Top10>Top 10 </Top10>
          <List>List</List>
        </HeadingText>
      </StyledTypography>
      <Box display="flex" justifyContent="center" mb={2}>
        <StyledTextField
          variant="outlined"
          placeholder="Search cryptos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box>
                  <SearchIcon style={{ marginTop: "6px", color: "gray" }} />
                </Box>
              </InputAdornment>
            ),
            style: InputPropsStyle,
          }}
          inputProps={{ style: InputPropsStyle }}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={textFieldSx}
        />
      </Box>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {["Rank", "Icon", "Name", "Price", "24h Volume", "MarketCap", "Price Chart"].map((header) => (
                <StyledTableCell key={header}>{header}</StyledTableCell>
              ))}
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                <TableCellBlack>
                  <div style={{ width: 100, height: 50 }}>
                    <Line data={createChartData(coin.sparkline)} options={{ 
                      maintainAspectRatio: false, 
                      scales: { 
                        x: { display: false },
                        y: { display: false }
                      },
                      plugins: {
                        legend: { display: false }
                      }
                    }} />
                  </div>
                </TableCellBlack>
                <TableCellBlack style={RedText}>
                  <FavoriteIcon />
                </TableCellBlack>
                <TableCellBlack>
                  <IconButton onClick={() => handleOpenDialog(coin)} style={ChartIcon}>
                    <CalculateIcon style={{ color: "#3486d7" }} />
                  </IconButton>
                </TableCellBlack>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

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
