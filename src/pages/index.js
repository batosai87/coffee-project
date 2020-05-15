import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/backgroundsection'
import Info from "../components/home/info"
import Menu from '../components/home/menu'
import Products from '../components/home/products'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby` , `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="eling coffee's" /> 
    <Info />
    <Menu items={data.menu}/>
    <Products />
    </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq: "coffee-back.jpg"})
  {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCoffeeItem{
    edges{
      node{
        id
        title
        description{
          description
        }
        harga
        category
        image{
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
