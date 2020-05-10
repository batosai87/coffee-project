import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/backgroundsection'
import Info from "../components/home/info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby` , `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="about us" styleClass="about-background"/> 
    <Info />
    </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq: "latte-back.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage