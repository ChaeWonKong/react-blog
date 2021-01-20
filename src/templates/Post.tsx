import React from 'react';

import { graphql } from 'gatsby';
import Layouts from '../components/Layouts';
import Helmet from 'react-helmet';

// eslint-disable-next-line
require('prismjs/themes/prism.css');

import styled from 'styled-components';

interface TemplateProps {
  data: any;
}

const Title =styled.h1`
  margin-bottom: 24px;
`;

const Date = styled.h3`
  font-size: 16px;
  color: #ababab;
  font-weight: normal;
  text-decoration: none;

`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: TemplateProps) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <Helmet>
        <title>{ `TIN WOODMAN::${frontmatter.title}` }</title>
        <meta property='og:image' content={ frontmatter.image } />
        <meta property='og:title' content={ frontmatter.title } />
        <meta property='og:description' content={ frontmatter.description } />
        <meta property='og:image' content={ frontmatter.image } />
      </Helmet>
      <Layouts>
        <div className='blog-post-container'>
          <div className='blog-post'>
            <Date>{ frontmatter.date }</Date>
            <Title>{ frontmatter.title }</Title>
            
            <div
              className='blog-post-content'
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Layouts>
    </>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image
        description
      }
    }
  }
`;
