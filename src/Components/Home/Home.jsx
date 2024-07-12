import React, { useContext, useState } from "react"
import { MyDataContext } from "../../Context/Provider"
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
  Container,
} from "@mui/material"
import { Link } from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShowChartIcon from "@mui/icons-material/ShowChart"
import SearchIcon from "@mui/icons-material/Search"

export function Home() {
  // Usestate for data,catching errors and loading
  const { data, loading, error } = useContext(MyDataContext)

  // Usestate for searchbars
  const [searchQuery, setSearchQuery] = useState("")

  // Loading icons
  if (loading) {
    return <CircularProgress style={{ color: "white" }} />
  }

  // Error handler
  if (error) {
    return <p>Error: {error.message}</p>
  }

  // Filtriranje podataka
  const filteredCoins = data.data.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Container
      style={{
        padding: "20px",
        backgroundColor: "white",
        color: "white",
        minHeight: "100vh",
        maxWidth: "80vw",
        margin: "auto",
        position: "relative",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        style={{
          position: "absolute",
          top: "-5px",
          left: "0",
          marginBottom: "0",
          color: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            fontWeight: "1300",
          }}
        >
          <p style={{ fontWeight: "900" }}>Top 10 </p>
          <p style={{ color: "red", fontWeight: "900" }}>List</p>
        </div>
      </Typography>
      {/* Pretraga */}
      <Box display="flex" justifyContent="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search cryptos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "grey" }} />
              </InputAdornment>
            ),
            style: {
              color: "rgb(209 213 219 / var(--tw-text-opacity, 1))",
              height: "40px",
            },
          }}
          inputProps={{
            style: {
              color: "rgb(209 213 219 / var(--tw-text-opacity, 1))",
              "--tw-text-opacity": "1",
            },
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            backgroundColor: "rgba(55 ,65, 81, var(--tw-text-opacity, 1))",

            borderRadius: "10px",
          }}
          sx={{
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
          }}
        />
      </Box>
      {/* Tabela */}
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "white",
          width: "100%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  fontSize: "1em",
                }}
              >
                Rank
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  fontSize: "1em",
                }}
              >
                Icon
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  fontSize: "1em",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  fontSize: "1em",
                }}
              >
                Price
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  fontSize: "1em",
                }}
              >
                24h Volume
              </TableCell>
              <TableCell
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                  fontSize: "1em",
                }}
              >
                marketCap
              </TableCell>
              <TableCell
                style={{ color: "black", fontWeight: "bold" }}
              ></TableCell>
              <TableCell
                style={{ color: "red", fontWeight: "bold" }}
              ></TableCell>
              <TableCell
                style={{ color: "black", fontWeight: "bold" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Prikazuje prvih 10 valuta */}
            {filteredCoins.slice(0, 10).map((coin) => (
              <TableRow key={coin.id}>
                <TableCell style={{ color: "black" }}>{coin.rank}</TableCell>
                <TableCell>
                  <Link to="/coin-details">
                    <img
                      src={coin.iconUrl}
                      alt={coin.name}
                      style={{ width: "40px", marginRight: "10px" }}
                    />
                  </Link>
                </TableCell>

                <TableCell style={{ color: "black" }}>
                  <Link to="/coin-details" style={{ textDecoration: "none" }}>
                    {coin.name}
                  </Link>
                </TableCell>
                <TableCell style={{ color: "black", fontWeight: "bold" }}>
                  ${parseFloat(coin.price).toFixed(2)}
                </TableCell>
                <TableCell style={{ color: "black", fontWeight: "bold" }}>
                  ${parseFloat(coin["24hVolume"]).toLocaleString()}
                </TableCell>
                <TableCell style={{ color: "black", fontWeight: "bold" }}>
                  ${parseFloat(coin.marketCap).toLocaleString()}
                </TableCell>
                <TableCell style={{ color: "black", fontWeight: "bold" }}>
                  <ShowChartIcon style={{ color: "black" }} />
                </TableCell>
                <TableCell style={{ color: "red", fontWeight: "bold" }}>
                  <FavoriteIcon />
                </TableCell>
                <TableCell style={{ color: "black", fontWeight: "bold" }}>
                  <SearchIcon style={{ color: "black" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
