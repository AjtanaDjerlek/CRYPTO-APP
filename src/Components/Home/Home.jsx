import React, { useContext, useState } from "react"
import { MyDataContext } from "../../Context/Provider"
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  InputAdornment,
  Button,
  IconButton,
  TableCell,
  Typography,
} from "@mui/material"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import { Link } from "react-router-dom"
import { Line } from "react-chartjs-2"
import SearchIcon from "@mui/icons-material/Search"
import CalculateIcon from "@mui/icons-material/Calculate"
import {
  StyledContainer,
  StyledTypography,
  HeadingText,
  Top10,
  List,
  StyledTextField,
  StyledTableContainer,
  StyledTableCell,
  TableCellBlack,
  CoinIcon,
  BoldText,
  ChartIcon,
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  StyledDialogTextField,
  StyledDialogCalculationContainer,
  StyledDialogCalculationItem,
  HeartIcon,
  ImgStyled,
  ImgDiv,
} from "./HomeStyled"

export function Home({ setFavoriteItemsProp }) {
  const { data, loading, error, setCoin } = useContext(MyDataContext)

  const [searchQuery, setSearchQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState("")
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [favoriteItems, setFavoriteItems] = useState([])
  const [heartButton, setHeartButton] = useState(false) // Dodato stanje heartButton

  const addCoinToFavorite = (item) => {
    setFavoriteItems((prevItems) => [...prevItems, item])
    setFavoriteItemsProp((prevItems) => [...prevItems, item])
  }

  if (loading) {
    return <CircularProgress style={{ color: "white" }} />
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  const filteredCoins = data.data.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const addItemToDetailPage = (item) => {
    setCoin(item)
  }

  const handleCloseDialog = () => {
    setOpen(false)
    setAmount(0)
    setTotal("")
    setSelectedCoin(null)
  }

  const handleCalculate = () => {
    if (amount && selectedCoin) {
      const totalAmount = (amount * parseFloat(selectedCoin.price)).toFixed(2)
      setTotal(totalAmount)
    }
  }

  const handleOpenDialog = (coin) => {
    setSelectedCoin(coin)
    setOpen(true)
  }

  const createChartData = (sparkline) => ({
    labels: sparkline.map((_, index) => index),
    datasets: [
      {
        label: "Price",
        data: sparkline,
        borderColor: "blue",
        backgroundColor: "rgba(199, 210, 254, 0.5)",
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
      },
    ],
  })

  const toggleFavorite = (coin) => {
    if (favoriteItems.includes(coin)) {
      // Ako je stavka već omiljena, ukloni je
      const updatedFavorites = favoriteItems.filter((item) => item !== coin)
      setFavoriteItems(updatedFavorites)
      setFavoriteItemsProp(updatedFavorites)
      setHeartButton(false) // Postavi heartButton na false kad se ukloni
    } else {
      // Inače, dodaj stavku u omiljene
      setFavoriteItems((prevItems) => [...prevItems, coin])
      setFavoriteItemsProp((prevItems) => [...prevItems, coin])
      setHeartButton(true) // Postavi heartButton na true kad se doda
    }
  }

  return (
    <>
      <ImgDiv>
        <ImgStyled src="src/Components/Home/b.jpg" alt="" />
      </ImgDiv>
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
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "Rank",
                  "Icon",
                  "Name",
                  "Price",
                  "24h Volume",
                  "MarketCap",
                  "Price Chart",
                ].map((header) => (
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
                      <Line
                        data={createChartData(coin.sparkline)}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            x: { display: false },
                            y: { display: false },
                          },
                          plugins: {
                            legend: { display: false },
                          },
                        }}
                      />
                    </div>
                  </TableCellBlack>
                  <TableCellBlack onClick={() => toggleFavorite(coin)}>
                    {!favoriteItems.includes(coin) ? (
                      <HeartIcon
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="heart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ color: "red" }}
                      >
                        <path
                          fill="#ff0000"
                          d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                        ></path>
                      </HeartIcon>
                    ) : (
                      <FavoriteRoundedIcon style={{ color: "red" }} />
                    )}
                  </TableCellBlack>
                  <TableCellBlack>
                    <IconButton
                      onClick={() => handleOpenDialog(coin)}
                      style={ChartIcon}
                    >
                      <CalculateIcon style={{ color: "#3486d7" }} />
                    </IconButton>
                  </TableCellBlack>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <StyledDialog
          open={open}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="sm"
        >
          <StyledDialogTitle>
            {selectedCoin ? (
              <>
                {selectedCoin.name}{" "}
                <img
                  src={selectedCoin.iconUrl}
                  alt={selectedCoin.name}
                  style={{ width: "24px", marginLeft: "10px" }}
                />
              </>
            ) : (
              "Crypto Details"
            )}
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
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </StyledDialogActions>
        </StyledDialog>
      </StyledContainer>
    </>
  )
}
