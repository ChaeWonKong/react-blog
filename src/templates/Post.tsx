import React from 'react';

import { graphql } from 'gatsby';
import Layouts from '../components/Layouts';
import Helmet from 'react-helmet';
require("prismjs/themes/prism.css")

import * as S from './styled'

interface TemplateProps {
  data: any;
}


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
            <S.Heading1>{ frontmatter.title }</S.Heading1>
            <S.Heading2>{ frontmatter.date }</S.Heading2>
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
