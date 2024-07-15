import React, { useContext } from "react"

import { Line } from "react-chartjs-2"
import { MyDataContext } from "../../Context/Provider"
import { Link } from "react-router-dom"

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

import {
  ParentDiv,
  LineDiv,
  FirstDiv,
  SecondDiv,
  ValueStatiscDiv,
  SuplyInfromationDiv,
  WhatIsCoinDiv,
  LinksDiv,
  DivTwo,
  DivOne,
  TableRow1,
  Img,
  TableRow2,
} from "./CoinDetailsStyled"
import { TableCell } from "@mui/material"
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded"
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded"
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded"
import EggRoundedIcon from "@mui/icons-material/EggRounded"
import WaterRoundedIcon from "@mui/icons-material/WaterRounded"
import BeenhereRoundedIcon from "@mui/icons-material/BeenhereRounded"

import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded"
import YouTubeIcon from "@mui/icons-material/YouTube"
import GitHubIcon from "@mui/icons-material/GitHub"
import RedditIcon from "@mui/icons-material/Reddit"
import TwitterIcon from "@mui/icons-material/Twitter"
import TelegramIcon from "@mui/icons-material/Telegram"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

export const CoinDetails = () => {
  const { coin } = useContext(MyDataContext)

  const createChartData = (sparkline) => ({
    labels: sparkline.map((_, index) => index),
    datasets: [
      {
        label: "Price",
        data: sparkline,
        borderColor: "blue",
        backgroundColor: "rgba(59,130,246,.5)",
        borderWidth: 7,
        fill: true,
        pointRadius: 4,
      },
    ],
  })
  return (
    <ParentDiv>
      <FirstDiv>
        <TableRow1>
          <div>
            <TableCell>{coin.rank}</TableCell>
            <TableCell>
              <Img src={coin.iconUrl} />
            </TableCell>
            <TableCell>{coin.name}</TableCell>
            <TableCell>{coin.symbol}</TableCell>
            <TableCell>${parseFloat(coin.price).toFixed(2)}</TableCell>
          </div>
          <TableCell>
            <Link to="/">Home</Link>
          </TableCell>
        </TableRow1>
        <TableRow2>
          <TableCell>
            <h3>Pice Chart</h3>
          </TableCell>
          <TableCell>
            <h3>24h</h3>
          </TableCell>
          <TableCell>{coin.change}%</TableCell>
          <TableCell>${parseFloat(coin["24hVolume"]).toFixed(2)}</TableCell>
        </TableRow2>
        <LineDiv>
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
        </LineDiv>
      </FirstDiv>

      <SecondDiv>
        <DivOne>
          <ValueStatiscDiv>
            <h2>Value statistics</h2>
            <p>
              An overview showing the statistics of Bitcoin, such as the base
              and quote currency the rank, and trading volume.
            </p>
            <TableCell>
              <MonetizationOnRoundedIcon />
              Price to EUR{coin.change}%
            </TableCell>
            <TableCell>
              <CurrencyBitcoinRoundedIcon />
              Price to BTC{coin.change}%
            </TableCell>
            <TableCell>
              <LeaderboardRoundedIcon />
              Rank{coin.change}%
            </TableCell>
            <TableCell>
              <EggRoundedIcon />
              24h volume{coin.change}%
            </TableCell>
            <TableCell>
              {" "}
              <WaterRoundedIcon /> Market cap{coin.change}%
            </TableCell>
            <TableCell>
              {" "}
              <WaterRoundedIcon /> Fully diluted market cap{coin.change}%
            </TableCell>
            <TableCell>
              {" "}
              <BeenhereRoundedIcon /> All-time high (daily avg.){coin.change}%
            </TableCell>
          </ValueStatiscDiv>

          <SuplyInfromationDiv>
            <h2>Supply information</h2>
            <p>
              View the total and circulating supply of Bitcoin, including
              details on how the supplies are calculated.
            </p>
            <p>
              <CheckCircleOutlineIcon /> Verified supplys
            </p>
            <TableCell>Updated 2 minutes ago{coin.change}%</TableCell>
            <TableCell>Total supply{coin.change}%</TableCell>
            <TableCell>Max supply{coin.change}%</TableCell>
            <TableCell>Total supply{coin.change}%</TableCell>
          </SuplyInfromationDiv>
        </DivOne>

        <DivTwo>
          <WhatIsCoinDiv>
            <p>
              stETH tokens represent staked ETH in Lido, allowing users to earn
              ETH 2.0 staking rewards and access DeFi yields.
            </p>
          </WhatIsCoinDiv>

          <LinksDiv>
            <TableCell>
              <InsertLinkRoundedIcon /> <h4>website</h4>
              <p>xrpl.org</p>
            </TableCell>

            <TableCell>
              <GitHubIcon />
              <h4>github</h4>
              <p>xrplf/rippled</p>
            </TableCell>
            <TableCell>
              <RedditIcon />
              <h4>reddit</h4>
              <p>r/XRP</p>
            </TableCell>
            <TableCell>
              <TwitterIcon />
              <h4>twiter</h4>
              <p>@XRPLF</p>
            </TableCell>
            <TableCell>
              <YouTubeIcon />
              <h4>YouTube</h4>
              <p>YouTube</p>
            </TableCell>
            <TableCell>
              <TelegramIcon /> <h4>telegram</h4>
              <p>@Telegram</p>
            </TableCell>
          </LinksDiv>
        </DivTwo>
      </SecondDiv>
    </ParentDiv>
  )
}
