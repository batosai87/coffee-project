import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/backgroundsection'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby` , `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffee eling" styleClass="default-background" /> 

  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq: "coffee-back.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
