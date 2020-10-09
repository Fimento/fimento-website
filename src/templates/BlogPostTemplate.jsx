import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const BlogPostTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <div className="blog-post-container">
    <div className="blog-post">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      html: PropTypes.node,
    }),
  }),
};

BlogPostTemplate.defaultProps = {
  data: {},
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
