import React from 'react'
import { Link } from 'gatsby'

export default ({ posts }) => (
  <section>
    <p className="sign">@@@@@@@@@@@@@@@@@@@@@@@@@</p>
    <h2 className="big">Latest work.</h2>
    <ul>
      {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
      <li key={node.fields.slug}>
        <span className="star">*</span>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
        {node.frontmatter.description}
      </li>
      )
      })}
    </ul>
  </section>
);
