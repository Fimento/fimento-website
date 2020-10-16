import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import style from '../constants/style';

import Page from '../layout/Page';

import Section from '../logic/layouts/Section';

import StyledArticle from '../styled/layouts/StyledArticle';

import StyledButton from '../styled/elements/StyledButton';
import StyledH1 from '../styled/elements/StyledH1';
import StyledH4 from '../styled/elements/StyledH4';

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledYoutubePlayer = styled.div`
  display: flex;
  width: 100%;
  height: 16.625rem;
  justify-content: center;

  ${style.media.tablet`
    width: 100%;
    height: 22.5rem;
  `}

`;

const StyledCoverImageSection = styled.section`
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;
`;

const BlogPostTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <Page>
    {frontmatter.coverImage && (<StyledCoverImageSection background={frontmatter.coverImage} />)}
    <Section medium>
      <StyledBlogPost>
        <StyledButton as={Link} to="/blog">Back to blog</StyledButton>
        <StyledH1>{frontmatter.title}</StyledH1>
        <StyledH4>{frontmatter.date}</StyledH4>
        {frontmatter.youtubeId && (
          <StyledYoutubePlayer>
            <iframe
              title="Youtube video"
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${frontmatter.youtubeId}?origin=http://fimento.com`}
              frameBorder="0"
            />
          </StyledYoutubePlayer>
        )}
        <StyledArticle
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </StyledBlogPost>
    </Section>
  </Page>
);

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        youtubeId: PropTypes.string,
        coverImage: PropTypes.node,
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
        coverImage
        youtubeId
      }
    }
  }
`;
