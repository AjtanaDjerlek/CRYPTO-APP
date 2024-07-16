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
  DivTwo,
  DivOne,
  TableRow1,
  Img,
  TableRow2,
  BoldText,
  PriceText,
  IconTextWrapper,
  StyledTableCell,
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
        backgroundColor: "rgba(199, 210, 254, 0.5)",
        borderWidth: 7,
        fill: true,
        pointRadius: 8,
        pointBackgroundColor: "rgba(59,130,246,.5)",
        pointBorderColor: "rgba(59,130,246,.5)",
      },
    ],
  })
  return (
    <ParentDiv>
      <FirstDiv>
        <TableRow1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "none",
            }}
          >
            <TableCell
              style={{
                fontWeight: "bolder",
                borderBottom: "none",
                fontSize: "17px",
              }}
            >
              {coin.rank}
            </TableCell>
            <TableCell>
              <Img src={coin.iconUrl} />
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
                borderBottom: "none",
                fontSize: "17px",
              }}
            >
              {coin.name}
            </TableCell>
            <TableCell style={{ borderBottom: "none", fontSize: "17px" }}>
              {coin.symbol}
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bolder",
                borderBottom: "none",
                fontSize: "17px",
              }}
            >
              $
              {parseFloat(coin.price).toLocaleString("en-US", {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
              })}
            </TableCell>
          </div>

          <TableCell
            style={{
              borderBottom: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "blue",
              }}
              to="/"
            >
              Home
            </Link>
          </TableCell>
        </TableRow1>
        <TableRow2>
          <TableCell
            style={{
              fontWeight: "bolder",
              borderBottom: "none",
              fontSize: "17px",
            }}
          >
            Price chart
          </TableCell>
          <TableCell
            style={{
              borderBottom: "none",
              fontSize: "17px",
            }}
          >
            24h
            <span style={{ color: "limegreen" }}>{coin.change}%</span>
          </TableCell>
          <TableCell
            style={{
              borderBottom: "none",
              fontSize: "17px",
            }}
          >
            High
            <span
              style={{
                fontWeight: "bolder",
              }}
            >
              $
              {parseFloat(coin["24hVolume"]).toLocaleString("en-US", {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
              })}
            </span>
          </TableCell>
          {/* </div> */}
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
            <h3
              style={{
                textAlign: "start",
                fontSize: "29px",
                fontWeight: "lighter",
              }}
            >
              Value statistics
            </h3>
            <p
              style={{
                textAlign: "start",
                width: "85%",
                color: "gray",
              }}
            >
              An overview showing the statistics of Bitcoin, such as the base
              and quote currency the rank, and trading volume.
            </p>

            <StyledTableCell>
              <IconTextWrapper>
                <MonetizationOnRoundedIcon
                  style={{ color: "rgb(25, 118, 210)" }}
                />
                <PriceText>Price to EUR</PriceText>
                <BoldText>{coin.price}</BoldText>
              </IconTextWrapper>
            </StyledTableCell>
            <StyledTableCell>
              <IconTextWrapper>
                <CurrencyBitcoinRoundedIcon
                  style={{ color: "rgb(25, 118, 210)" }}
                />
                <PriceText>Price to BTC</PriceText>
                <BoldText>{coin.btcPrice}</BoldText>
              </IconTextWrapper>
            </StyledTableCell>
            <StyledTableCell>
              <IconTextWrapper>
                <LeaderboardRoundedIcon
                  style={{ color: "rgb(25, 118, 210)" }}
                />
                <PriceText>Rank </PriceText>
                <BoldText>#{coin.rank}</BoldText>
              </IconTextWrapper>
            </StyledTableCell>
            <StyledTableCell>
              <IconTextWrapper>
                <EggRoundedIcon style={{ color: "rgb(25, 118, 210)" }} />
                <PriceText>24h volume</PriceText>{" "}
                <BoldText>
                  {parseFloat(coin["24hVolume"]).toLocaleString("en-US")}
                </BoldText>
              </IconTextWrapper>
            </StyledTableCell>
            <StyledTableCell>
              <IconTextWrapper>
                <WaterRoundedIcon style={{ color: "rgb(25, 118, 210)" }} />
                <PriceText>Market cap</PriceText>
                <BoldText>{coin.marketCap}</BoldText>
              </IconTextWrapper>
            </StyledTableCell>
            <StyledTableCell>
              <IconTextWrapper>
                <WaterRoundedIcon style={{ color: "rgb(25, 118, 210)" }} />

                <PriceText>Fully diluted market cap</PriceText>
                <BoldText>{coin.listedAt}</BoldText>
              </IconTextWrapper>
            </StyledTableCell>
            <StyledTableCell>
              <IconTextWrapper>
                <BeenhereRoundedIcon style={{ color: "rgb(25, 118, 210)" }} />

                <PriceText>All-time high (daily avg.)</PriceText>
                <BoldText>{coin.listedAt}</BoldText>
              </IconTextWrapper>
            </StyledTableCell>
          </ValueStatiscDiv>

          <SuplyInfromationDiv>
            <h3
              style={{
                textAlign: "start",
                fontSize: "29px",
                fontWeight: "lighter",
              }}
            >
              Supply information
            </h3>
            <p
              style={{
                textAlign: "start",
                width: "85%",
                color: "gray",
              }}
            >
              View the total and circulating supply of Bitcoin, including
              details on how the supplies are calculated.
            </p>

            <SupplyDetails>
              <p style={{ color: "rgba(34, 197, 94, 1)" }}>
                <CheckCircleOutlineIcon
                  style={{ color: "rgba(34, 197, 94, 1)" }}
                />
                Verified supplys
              </p>
              <TableCellRow>
                <TableCelll>Updated 2 minutes ago</TableCelll>
                <TableCellll>
                  $
                  {parseFloat(coin.price).toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  })}
                </TableCellll>
              </TableCellRow>
              <TableCellRow>
                <TableCelll>Total supply</TableCelll>
                <TableCellll>{coin.listedAt}</TableCellll>
              </TableCellRow>
              <TableCellRow>
                <TableCelll>Max supply</TableCelll>
                <TableCellll>{coin.marketCap}</TableCellll>
              </TableCellRow>
              <TableCellRow>
                <TableCelll>Total supply</TableCelll>
                <TableCellll>{coin.listedAt}</TableCellll>
              </TableCellRow>
            </SupplyDetails>
          </SuplyInfromationDiv>
        </DivOne>

        <DivTwo>
          <WhatIsCoinDiv>
            <h4 style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              What is {coin.name}
            </h4>
            <div
              style={{
                border: "1px solid rgba(59, 130, 246, 0.5)",
                width: "80%",

                alignItems: "center",
              }}
            >
              <p style={{ fontFamily: "Roboto" }}>
                stETH tokens represent staked ETH in Lido, allowing users to
                earn ETH 2.0 staking rewards and access DeFi yields.
              </p>
            </div>
          </WhatIsCoinDiv>

          <SupplyDetails2>
            <TableCellRow2>
              <InsertLinkRoundedIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  width: "40px",
                  height: "40px",
                }}
              />{" "}
              <h4>website</h4>
              <TableCelP>
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                  href="/"
                >
                  stake.lido.fi
                </a>
              </TableCelP>
            </TableCellRow2>

            <TableCellRow2>
              <GitHubIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  width: "40px",
                  height: "40px",
                }}
              />
              <h4>github</h4>
              <TableCelP>
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                  href="/"
                >
                  github.com
                </a>
              </TableCelP>
            </TableCellRow2>
            <TableCellRow2>
              <RedditIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  width: "40px",
                  height: "40px",
                }}
              />
              <h4>reddit</h4>
              <TableCelP>
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                  href="/"
                >
                  reddit.com
                </a>
              </TableCelP>
            </TableCellRow2>
            <TableCellRow2>
              <TwitterIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  width: "40px",
                  height: "40px",
                }}
              />
              <h4>twiter</h4>
              <TableCelP>
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                  href="/"
                >
                  twiter.com
                </a>{" "}
              </TableCelP>
            </TableCellRow2>
            <TableCellRow2>
              <YouTubeIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  width: "40px",
                  height: "40px",
                }}
              />
              <h4>YouTube</h4>
              <TableCelP>
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                  href="/"
                >
                  youtube.com
                </a>{" "}
              </TableCelP>
            </TableCellRow2>
            <TableCellRow2>
              <TelegramIcon
                style={{
                  color: "rgb(25, 118, 210)",
                  width: "40px",
                  height: "40px",
                }}
              />{" "}
              <h4>telegram</h4>
              <TableCelP>
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                  href="/"
                >
                  telegram.com
                </a>
              </TableCelP>
            </TableCellRow2>
          </SupplyDetails2>
        </DivTwo>
      </SecondDiv>
    </ParentDiv>
  )
}

import { styled } from "@mui/material"

const SupplyDetails = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: rgb(241, 246, 255);
  width: 100%;
  height: 70%;
  gap: 30px;
  padding-top: 30px;
`
const SupplyDetails2 = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* background-color: rgb(241, 246, 255); */

  width: 47%;
  height: 70%;
  gap: 30px;
  padding-top: 30px;
`

const TableCellRow = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 75%;
  border-bottom: 1px solid gray;
  font-family: "Roboto";
`
const TableCellRow2 = styled("div")`
  display: flex;
  align-items: center; /* Novo: Poravnanje ikonice i teksta */
  justify-content: space-between; /* Novo: Raspored između ikonice/naziva i linka */
  width: 75%;
  border-bottom: 1px solid rgba(59, 130, 246, 0.5);
  font-family: "Roboto";
  gap: 7px;
`

const TableCelll = styled("div")`
  font-size: 16px;
  margin-right: auto;
`
const TableCellll = styled("div")`
  font-size: 16px;
  font-weight: bolder;
  margin-left: auto;
`
const TableCelP = styled("div")`
  font-size: 16px;

  margin-left: auto;
  font-family: "Roboto";
`
