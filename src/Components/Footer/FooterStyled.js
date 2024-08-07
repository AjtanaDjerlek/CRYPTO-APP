import { styled } from "@mui/material"

export const FooterContainer = styled("div")({
  "--tw-bg-opacity": "1",
  backgroundColor: "rgba(191, 219, 254, var(--tw-bg-opacity))",
  padding: "40px 20px",
  textAlign: "center",
  borderTop: "2px solid rgba(191, 219, 254, var(--tw-bg-opacity))",
  borderBottom: "2px solid rgba(191, 219, 254, var(--tw-bg-opacity))",
  fontFamily: "Arial",
})

export const FooterNav = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "10px",
  padding: "20px",
  border: "4px solid #252f36",
  borderRadius: "22px",
  backgroundColor: "rgba(191, 219, 254, var(--tw-bg-opacity))",
  width: "800px",
  maxWidth: "700px",
  margin: "0 auto",
  fontWeight: "bold",
  fontSize: "14px",
  color: "#393a3b",
})

export const FooterLink = styled("span")({
  cursor: "pointer",
  padding: "5px 10px",
  "&:hover": {
    color: "#697278",
  },
})

export const FooterText = styled("div")({
  fontSize: "12px",
  marginTop: "20px",
  color: "#393a3b",
  fontFamily: "Arial",
})
