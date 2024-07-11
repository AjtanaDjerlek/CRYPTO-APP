// AboutUs.jsx
import React from "react"

import { CardContent } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"

import {
  StyledCard,
  StyledCardMedia,
  StyledGrid,
  StyledTypographyName,
  StyledTypographyCity,
  LineDiv,
  StyledGitHubLink,
  StyledTypographyDescription,
} from "./AboutUsStyled"

const creators = [
  {
    name: "Amer Salkovic",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Amer work's in center NIT as a Web developer",
    image:
      "src/Components/AboutUs/WhatsApp Image 2024-07-11 at 14.29.48_38cc7e14.jpg",
    github: "https://github.com/amer-salkovic",
  },
  {
    name: "Ajtana Djerlek",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Ajtana work's in center NIT as a Web developer",
    image:
      "src/Components/AboutUs/WhatsApp Image 2024-07-11 at 14.33.32_e96e7da6.jpg",
    github: "https://github.com/AjtanaDjerlek",
  },
  {
    name: "Ermin Muslic",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Ermin work's in center NIT as a Web developer",
    image: "path_to_jane_smith_image.jpg",
    github: "https://github.com/ErminMuslic",
  },

  {
    name: "Senad Zukorlic",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Senad work's in center NIT as a Web developer",
    image:
      "src/Components/AboutUs/WhatsApp Image 2024-07-11 at 14.37.03_61008c20.jpg",
    github: "https://github.com/dakaaa01",
  },
]

export const AboutUs = () => {
  return (
    <StyledGrid container>
      {creators.map((creator, index) => (
        <StyledCard key={index}>
          <StyledCardMedia
            component="img"
            alt={creator.name}
            image={creator.image}
          />
          <CardContent>
            <StyledTypographyName gutterBottom variant="h1">
              {creator.name}
            </StyledTypographyName>
            <StyledTypographyCity gutterBottom variant="h6">
              {creator.city}
            </StyledTypographyCity>
            <LineDiv />

            <StyledTypographyDescription variant="body2" color="text.secondary">
              {creator.description}
            </StyledTypographyDescription>
            <StyledGitHubLink href={creator.github} target="_blank">
              <GitHubIcon />
            </StyledGitHubLink>
          </CardContent>
        </StyledCard>
      ))}
    </StyledGrid>
  )
}
