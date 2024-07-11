

import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

import  NavBar  from "./Components/NavBar/NavBar"
import { Home } from "./Components/Home/Home"
import { Coins } from "./Components/Coins/Coins"
import { AboutUs } from "./Components/AboutUs/AboutUs"
import { Favorite } from "./Components/Favorite/Favorite"
import { LogIn } from "./Components/LogIn/LogIn"
import  Footer  from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
