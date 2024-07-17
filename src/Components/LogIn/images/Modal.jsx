import * as React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"

import { MyDataContext } from "../../../Context/Provider"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
}

const TableCellBlack = (props) => (
  <TableCell
    {...props}
    style={{ ...props.style, color: "black", fontWeight: "bold" }}
  />
)

const CoinIcon = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: 32, height: 32 }} />
)

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { data } = React.useContext(MyDataContext)
  const searchQuery = ""

  const [coinNumber, setCoinNumber] = useState(0)

  const filteredCoins = data.data.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <Button onClick={handleOpen}>CRYPTO WALLET</Button>
      <Modal
        style={{
          color: "green",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TableContainer
          sx={style}
          component={Paper}
          style={{ maxHeight: "80%", overflow: "auto" }}
        >
          <Table aria-label="simple table">
            <TableRow>
              <TableCellBlack>Rank</TableCellBlack>
              <TableCellBlack>Name</TableCellBlack>
              <TableCellBlack>Price</TableCellBlack>
              <TableCellBlack>Market Cap</TableCellBlack>
              <TableCellBlack>Check</TableCellBlack>
              <TableCellBlack>Amount</TableCellBlack>
            </TableRow>

            <TableBody>
              {filteredCoins.slice(0, 20).map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>{coin.rank}</TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "black",
                    }}
                  >
                    <CoinIcon src={coin.iconUrl} alt={coin.name} />
                    {coin.name}
                  </TableCell>
                  <TableCell style={{ fontStyle: "italic" }}>
                    ${parseFloat(coin.price).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    ${parseFloat(coin.marketCap).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <input
                      type="checkbox"
                      style={{ width: "17px", height: "17px" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "70px",

                      height: "50px",
                    }}
                  >
                    <CustomTextField
                      type="number"
                      style={{
                        width: "70px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "red",
                        border: "none",
                      }}
                      value={coinNumber}
                      onChange={(e) => setCoinNumber(e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert("Add functionality here")}
            >
              Add
            </Button>
          </div>
        </TableContainer>
      </Modal>
    </div>
  )
}
import { styled } from "@mui/material/styles"

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "rgba(55, 65, 81, 1)",
    border: "none",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
})
