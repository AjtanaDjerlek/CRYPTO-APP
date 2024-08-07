import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import { MyDataProvider } from "./Context/Provider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyDataProvider>
    <Router>
      <App />
    </Router>
  </MyDataProvider>
)
