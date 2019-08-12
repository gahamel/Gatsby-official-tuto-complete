import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
export default ({ data }) => (
  <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Accueil</title>
        </Helmet>
        <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
  </React.Fragment>

)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`