import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import HomeFeed from "../components/HomeFeed"
import HomeOutro from "../components/HomeOutro"

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeFeed />
      <HomeOutro />
    </Layout>
  )
}
