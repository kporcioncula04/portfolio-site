import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

const Banner = () => {
  const data = useStaticQuery(graphql`
  query {
    vb: file(relativePath: { eq: "vb.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yp: file(relativePath: { eq: "yp.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gp: file(relativePath: { eq: "gp.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.vb.childImageSharp.fluid} />
          </div>
          <div className="main-text">karolina porcioncula</div>
          <div className="main-image">
            <Img fluid={data.yp.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.gp.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span> Scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
