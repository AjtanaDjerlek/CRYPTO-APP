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
          top: "-5px", // 5 pixels above the table
          left: "0",
          marginBottom: "0",
          color: "black",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Top 10 </p>
          <p style={{ color: "red" }}>list</p>
        </div>
      </Typography>
      {/* Pretraga */}
      <Box display="flex" justifyContent="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "grey" }} />
              </InputAdornment>
            ),
            style: { color: "grey" },
          }}
          inputProps={{
            style: { color: "grey" },
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            backgroundColor: "black",
            borderRadius: "4px",
            width: "300px",
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
              <TableCell style={{ color: "black" }}>Rank</TableCell>
              <TableCell style={{ color: "black" }}>Icon</TableCell>
              <TableCell style={{ color: "black" }}>Name</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell style={{ color: "black", fontWeight: "bold" }}>
                24h Volume
              </TableCell>
              <TableCell style={{ color: "black", fontWeight: "bold" }}>
                Market Cap
              </TableCell>
              <TableCell style={{ color: "black", fontWeight: "bold" }}>
                Chart
              </TableCell>
              <TableCell style={{ color: "red", fontWeight: "bold" }}>
                Favorite
              </TableCell>
              <TableCell style={{ color: "black", fontWeight: "bold" }}>
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Prikazuje prvih 10 valuta */}
            {filteredCoins.slice(0, 10).map((coin) => (
              <TableRow key={coin.id}>
                <TableCell style={{ color: "black" }}>{coin.rank}</TableCell>
                <TableCell>
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    style={{ width: "40px", marginRight: "10px" }}
                  />
                </TableCell>
                <TableCell style={{ color: "black" }}>{coin.name}</TableCell>
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
