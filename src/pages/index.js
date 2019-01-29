import React from 'react'
import { Link, graphql } from 'gatsby'

import Header from '../components/header';
import WorkList from '../components/work-list';
import Experience from '../components/experience';
import ThinkingAbout from '../components/thinking-about';
import Footer from '../components/footer';
import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Hola"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header />
        <WorkList posts={posts} />
        <Experience />
        <ThinkingAbout />
        <Footer />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
        }
      }
    }
  }
`
