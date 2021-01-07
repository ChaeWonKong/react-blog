import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layouts';
import { graphql } from 'gatsby';

const Wrapper = styled.div`

`;

const ListItem = styled.a`
  font-size: 18px;
  margin: 24px 0;
`

const IndexPage = ({ data }: any) => {
  const posts = data.allMarkdownRemark.edges
    .map(({ node }) => ({ ...node.frontmatter }));

  const renderPosts = () =>posts.map(({ title, date, slug }) => (
    <ListItem href={ slug } key={ slug }>
      <p>{ title }</p>
      <p>{ date }</p>
    </ListItem>
  ));

  return (
    <Layout>
      <Wrapper>
        <p>This is Tin Woodman Blog.</p>
        { renderPosts() }
      </Wrapper>
    </Layout>
  );
};

export const result = graphql`
    query{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug,
              title,
              date(formatString: "MMMM DD, YYYY"),
            }
          }
        }
      }
    }
  `;

export default IndexPage;
