import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Section from '../logic/layouts/Section';
import Page from '../layout/Page';

import StyledH1 from '../styled/elements/StyledH1';
import StyledParagraph from '../styled/elements/StyledParagraph';
import StyledAnchor from '../styled/elements/StyledAnchor';

import style from '../constants/style';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-bottom: 2px solid ${style.colours.beige};
  height: 16rem;
  width: calc(100% - (2 * ${style.spaces.small}));
  margin: ${style.spaces.small} 0 ${style.spaces.small} 0;
  padding: ${style.spaces.small};
  -webkit-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.07);
  -moz-box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.07);
  box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.07);

  ${style.media.tablet`
    width: calc(50% - (4 * ${style.spaces.small}));
    margin: ${style.spaces.small};
  `}

  ${style.media.laptop`
    width: calc(33% - (6 * ${style.spaces.small}));
    margin: ${style.spaces.small};
  `}

  ${StyledAnchor}{
    width:100%;
    height:100%;
    top:0;
    left: 0;
    text-decoration: none;
  }
`;

const StyledPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${style.media.tablet`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `}

`;
const StyledTitleContent = styled.div`

`;

const Blog = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <Page>
    <Section background="white" marginTop="none" marginBottom="none">
      <StyledTitleContent>
        <StyledH1>Our latest posts</StyledH1>
        <StyledParagraph>
          We want to share how we think,
          our views and thoughts,
          why we do what we do and more.
        </StyledParagraph>
        <StyledParagraph>
          Please keep reading.
        </StyledParagraph>
      </StyledTitleContent>
      <StyledPostsContainer>
        {posts.map(({ node: { frontmatter: post } }) => (
          <StyledPost>
            <StyledAnchor as={Link} to={post.slug}>
              <StyledParagraph>{post.date}</StyledParagraph>
              <StyledParagraph>{post.title}</StyledParagraph>
            </StyledAnchor>
          </StyledPost>
        ))}
      </StyledPostsContainer>
    </Section>
  </Page>
);

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

Blog.defaultProps = {
  data: {},
};

export default Blog;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            slug
            date
            title
          }
        }
      }
    }
  }
`;
