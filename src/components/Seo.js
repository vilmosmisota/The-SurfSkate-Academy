import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const Seo = ({ title, description }) => {
  const url = useLocation()
  const href = url.href

  const defaultImage = `href=${href}/static/31c87d45fb2a0553f9d56db9af156642/e6557/The-SurfSkate-Academy_Header_img.webp`
  const defaultDescription =
    "On land surf training for all levels of surfers in Scotland"
  const metaDescription = description || defaultDescription
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | The SurfSkate Academy`}
      meta={[{ name: `description`, content: metaDescription }]}
    >
      <link rel="canonical" href={href} />
      <meta name="description" content={metaDescription} />
      <meta
        name="keywords"
        content="surf training, surf skate, improve surfing, Scotland"
      />
      <meta property="og:title" content="The SurfSkate Academy" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={href} />
    </Helmet>
  )
}

export default Seo
