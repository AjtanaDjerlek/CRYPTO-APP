import React from "react"
import { Link } from "react-router-dom"
import { Line, Site, MidText } from "./refreshStyle"

export function Refresh() {
  return (
    <div style={Site}>
      <div style={MidText}>
        <h1>Page Not Found</h1>
        <p>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <Link to="/">
          <h4>Back to our Site</h4>
        </Link>
        <div style={Line}></div>
        <p>
          If this is your site,and you weren't expecting a 404 for this path
          please visit netlify's{" "}
          <a href="https://www.netlify.com">page not found-support guide</a>
          for troubleshooting tips
        </p>
      </div>
    </div>
  )
}
