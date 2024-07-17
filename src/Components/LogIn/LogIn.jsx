import React from "react"
import { Container, LeftContainer, Title, Text, Image } from "./LogInStyled"
import glavnaImage from "./images/Cryptomain.png"
import BasicModal from "./images/Modal"

export function LogIn() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
      </LeftContainer>
      <Image src={glavnaImage} alt="Crypto illustration" />
    </Container>
  )
}
