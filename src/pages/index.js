import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import HomeFeed from "../components/HomeFeed"
import HomeOutro from "../components/HomeOutro"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description="On land surf training in Scotland" />
      <Header />
      <HomeFeed />
      <HomeOutro />
    </Layout>
  )
}
