import { styled, TableRow } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const FirstDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`

export const TableRow1 = styled(TableRow)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-top: 10px;
  border-bottom: 2px solid rgba(59, 130, 246, 0.5);
`

export const TableRow2 = styled(TableRow)`
  display: flex;
  justify-content: space-between;

  padding-top: 20px;
  align-items: center;
  width: 90%;
  border-bottom: 2px solid rgba(59, 130, 246, 0.5);
`

export const Img = styled("img")`
  width: 40px;
  height: 40px;
`

export const LineDiv = styled("div")`
  width: 90%;
  height: 400px;
  padding-top: 50px;
`

import { TableCell } from "@mui/material"

export const SecondDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`

export const DivOne = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const DivTwo = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ValueStatiscDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  width: 50%;
`

export const SuplyInfromationDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1px 16px;
  font-family: "Roboto";
`

export const LinksDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 50%;
`

export const WhatIsCoinDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 47%;
`

export const StyledTableCell = styled(TableCell)`
  width: 75%;
  border-bottom: 2px solid rgba(59, 130, 246, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
`

export const IconTextWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const PriceText = styled("span")`
  margin-left: 8px;
  font-size: medium;
`

export const BoldText = styled("h4")`
  font-weight: bolder;
  margin-left: auto;
`
