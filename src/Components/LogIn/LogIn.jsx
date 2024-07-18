import React, { useState, useContext, useEffect } from "react";
import { Container, LeftContainer, Title, Text, Image, CoinInfo } from "./LogInStyled";
import glavnaImage from "./images/Cryptomain.png";
import BasicModal from "./images/Modal";
import { MyDataContext } from "../../Context/Provider";

export function LogIn() {
  const [open, setOpen] = useState(false);
  const { data } = useContext(MyDataContext);

  useEffect(() => {
    // console.log('Context Data:', data);
  }, [data]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const coinData = data && data.data && data.data.coins && data.data.coins[0];

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
        {coinData ? (
          <CoinInfo>
            <img 
              src={coinData.iconUrl} 
              alt={coinData.name} 
              style={{ width: "50px", height: "50px" }} 
            />
            <div>
              <p>{coinData.name}</p>
              <p>{coinData.symbol}</p>
              <p>${parseFloat(coinData.price).toFixed(2)}</p>
            </div>
          </CoinInfo>
        ) : (
          <p>No coin data</p>
        )}
      </LeftContainer>
      <Image src={glavnaImage} alt="Main" />
    </Container>
  );
}
