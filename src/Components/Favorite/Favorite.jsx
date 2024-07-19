import React from "react"
import { TableRow, TableCell } from "@mui/material"
import {
  StyledImage,
  CenteredBox,
  MessageText,
  GoToCoinsLink,
  StyledTableCell,
  TableRowStyled,
} from "./FavoriteStyled"
import MyFavImage from "./No-data-pana.png"

export const Favorite = ({ favoriteItems }) => {
  return (
    <div style={{ height: "90vh" }}>
      <CenteredBox>
        {favoriteItems.length > 0 ? (
          favoriteItems.map((coin, index) => (
            <TableRowStyled key={index}>
              <TableCell>
                <img
                  style={{ width: 50, height: 50 }}
                  src={coin.iconUrl}
                  alt={coin.name}
                />
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {coin.name}
              </TableCell>
              <StyledTableCell sx={{ fontWeight: "bold", color: "black" }}>
                ${parseFloat(coin.price).toFixed(2)}
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: "bold", color: "black" }}>
                ${parseFloat(coin.marketCap).toLocaleString()}
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: "bold", color: "black" }}>
                ${parseFloat(coin["24hVolume"]).toFixed(2)}
              </StyledTableCell>
            </TableRowStyled>
          ))
        ) : (
          <>
            <StyledImage src={MyFavImage} alt="No data" />
            <MessageText>
              You haven't added any coins to your favorite list, please add
              some.
            </MessageText>
            <GoToCoinsLink to="/coins">Go to coins</GoToCoinsLink>
          </>
        )}
      </CenteredBox>
    </div>
  )
}

export default Favorite
