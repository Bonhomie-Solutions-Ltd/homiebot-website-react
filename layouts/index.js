import React from "react"
import Link from "next/link"
import { Nav } from "../styles"
import "typeface-roboto";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav style= {{margin: -10, padding: 15}}>
        <Link href="/">
          <a>HomieBot</a>
        </Link>
        <Link href="/chatbot">
          <a>ChatNow!</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
        <Link href="/support">
          <a>Support</a>
        </Link>
        <Link href="/donate">
          <a>Donate</a>
        </Link>
      </Nav>
    </React.Fragment>
  )
}

export default Layout
