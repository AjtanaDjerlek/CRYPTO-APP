import React from "react"
import { TableRow, TableCell } from "@mui/material"
import {
  StyledImage,
  CenteredBox,
  MessageText,
  GoToCoinsLink,
  StyledTableCell,
} from "./FavoriteStyled"
import MyFavImage from "./No-data-pana.png"
import { red } from "@mui/material/colors"

export const Favorite = ({ favoriteItems }) => {
  return (
    <CenteredBox>
      {/* Centriramo sadržaj unutar ove Box komponente */}
      {favoriteItems.length > 0 ? (
        favoriteItems.map((coin, index) => (
          <TableRow
            style={{
              width: "1900px",
              border: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "start",
              paddingTop: "20px",
              borderBottom: "2px solid rgba(59, 130, 246, 0.5)",
              marginBottom: "20px",
            }}
            key={index}
          >
            <TableCell>
              <img
                style={{ width: 50, height: 50 }}
                src={coin.iconUrl}
                alt={coin.name}
              />
            </TableCell>
            <TableCell>{coin.name}</TableCell>
            <StyledTableCell sx={{ fontWeight: "bold", color: "black" }}>
              ${parseFloat(coin.price).toFixed(2)}
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: "bold", color: "black" }}>
              ${parseFloat(coin.marketCap).toLocaleString()}
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: "bold", color: "black" }}>
              ${parseFloat(coin["24hVolume"]).toFixed(2)}
            </StyledTableCell>
          </TableRow>
        ))
      ) : (
        <>
          <StyledImage src={MyFavImage} alt="No data" />
          <MessageText>
            You haven't added any coins to your favorite list, please add some.
          </MessageText>
          <GoToCoinsLink to="/coins">Go to coins</GoToCoinsLink>
        </>
      )}
    </CenteredBox>
  )
}

export default Favorite
