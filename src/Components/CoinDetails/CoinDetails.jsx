import React, { useContext } from "react"
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Grid,
  Paper,
} from "@mui/material"
import { Line } from "react-chartjs-2"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import BitcoinIcon from "@mui/icons-material/MonetizationOn" // You can use the actual icon URL here
import { MyDataContext } from "../../Context/Provider"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const theme = createTheme()

export const CoinDetails = () => {
  const { coin } = useContext(MyDataContext)

  const data = {
    labels: Array.from({ length: coin.sparkline.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Price",
        data: coin.sparkline,
        fill: true,
        backgroundColor: "rgba(66, 135, 245, 0.2)",
        borderColor: "#4287f5",
      },
    ],
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ my: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <IconButton>
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    style={{ width: 40, height: 40 }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="h4">{coin.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary">
                  {coin.symbol}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">${coin.price}</Typography>
                <Typography
                  variant="subtitle1"
                  color={coin.change > 0 ? "green" : "red"}
                >
                  24h {coin.change}%
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
              <Line data={data} />
            </Box>
          </Paper>
          <Grid container spacing={2} sx={{ mt: 3 }} />
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Value statistics</Typography>
              <Typography variant="body1">
                An overview showing the statistics of {coin.name}, such as the
                base and quote currency, the rank, and trading volume.
              </Typography>
            </Paper>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Supply information</Typography>
                <Typography variant="body1">
                  View the total and circulating supply of {coin.name},
                  including details on how the supplies are calculated.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
