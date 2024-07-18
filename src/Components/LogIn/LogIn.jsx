import React, { useEffect, useState } from "react";
import fetchData from "../../API/Request"; // Import the fetchData function
import { Container, LeftContainer, Title, Text, Image, CoinInfo } from "./LogInStyled";
import glavnaImage from "./images/Cryptomain.png";
import BasicModal from "./images/Modal";

export function LogIn() {
  const [open, setOpen] = React.useState(false);
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "f026b9f55amsha967c914610b5bep19604ajsn605d93c21fcf";
  const apiUrl = "https://api.coinranking.com/v2/coins";

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      const response = await fetchData(apiKey, apiUrl);
      setCoinData(response.data.coins[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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
        <BasicModal open={open} handleClose={handleClose} />
        {coinData && (
          <CoinInfo>
            <img src={coinData.iconUrl} alt={coinData.name} style={{ width: "50px", height: "50px" }} />
            <div>
              <p>{coinData.name}</p>
              <p>{coinData.symbol}</p>
              <p>${parseFloat(coinData.price).toFixed(2)}</p>
            </div>
          </CoinInfo>
        )}
      </LeftContainer>
      <Image src={glavnaImage} alt="Main" />
    </Container>
  );
}
