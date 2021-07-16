import React from "react"
import Layout from "../layouts"
import { Tab } from "../styles"
import { ChakraProvider } from "@chakra-ui/react"

const Home = props => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  )
}

export default Home
