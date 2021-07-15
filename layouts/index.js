import React from "react"
import Link from "next/link"
import { Nav, PageBody } from "../styles"
import { Global, css } from "@emotion/react"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Nav>
        <Link href="/">
          <a>HomieBot</a>
        </Link>
        <Link href="/page-two">
          <a>Privacy</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Layout
