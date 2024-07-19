import React from "react"
import {
  Container,
  LeftContainer,
  Title,
  Text,
  Image,
  CoinInfo,
  CoinImage,
  CoinDetails,
  CoinParagraph,
} from "./LogInStyled"
import glavnaImage from "./images/Cryptomain.png"
import BasicModal from "./images/Modal"
import { MyDataContext } from "../../Context/Provider"
import { useState } from "react"
import { useContext } from "react"
import { Refresh } from "../Refresh/refresh"

export function LogIn({ coin2, setCoin2 }) {
  const [open, setOpen] = useState(false)
  const { data } = useContext(MyDataContext)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  if (!data) {
    return null
  }

  return (
    <Container>
      <LeftContainer>
        <Title>
          Buy Bitcoin <br /> & Crypto
        </Title>
        <Text>
          Sign up today and <span style={{ color: "red" }}>buy 50+</span>
          <br /> cryptocurrencies in minutes.
          <br />
          Get started with as little as{" "}
          <span style={{ color: "red" }}>$10</span>.
        </Text>
        <BasicModal open={open} handleClose={handleClose} setCoin2={setCoin2} />
        {coin2 ? (
          <CoinInfo>
            <CoinImage src={coin2.iconUrl} alt={coin2.name} />
            <CoinDetails>
              <CoinParagraph>{coin2.symbol}</CoinParagraph>
              <CoinParagraph>
                ${parseFloat(coin2.price).toFixed(2)}
              </CoinParagraph>
            </CoinDetails>
          </CoinInfo>
        ) : null}
      </LeftContainer>
      <Image src={glavnaImage} alt="Main" />
    </Container>
  )
}
