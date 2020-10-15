import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import style from '../constants/style';

import Page from '../layout/Page';

import Section from '../logic/layouts/Section';

import StyledButton from '../styled/elements/StyledButton';
import StyledImg from '../styled/elements/StyledImg';
import { DEFAULT_PARAGRAPH_FONT_SIZE } from '../styled/elements/StyledParagraph';
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
  height: 266px;
  justify-content: center;

  ${style.media.tablet`
    width: 100%;
    height: 360px;
  `}

`;

const StyledCoverImg = styled(StyledImg)`
  width: 100%;
`;

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  p {
    width: 100%;
    line-height: 1.5;
    font-weight: ${style.fontWeights.light};
    text-align: inherit;
    font-style: normal;
    font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
  }
  strong {
    width: 100%;
    line-height: 1.5;
    font-weight: ${style.fontWeights.bold};
    text-align: inherit;
    font-style: normal;
    font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
  }
  a {
    color: ${style.colours.secondary};
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    margin: 0 0 ${style.spaces.tinier};
    font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
    font-weight: ${style.fontWeights.light};
    line-height: 1.5;
  }

  h2 {
    font-size: 1.625rem;
    font-weight: ${style.fontWeights.bold};
    margin: ${style.spaces.regular} 0;
  }

  h3 {
    font-size: ${style.fontSizes.regular};
    font-weight: ${style.fontWeights.bold};
    margin: ${style.spaces.big} 0 ${style.spaces.tiny};
  }

  p > img {
    width: 100%;
  }
`;

const BlogPostTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <Page>
    {frontmatter.coverImage && (<StyledCoverImg src={frontmatter.coverImage} alt="Fimento" />)}
    <Section medium>
      {console.log(html)}
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
