import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layouts';
import { graphql } from 'gatsby';

const Wrapper = styled.div`
  
`;

const ListItem = styled.a`
  display: flex;
  font-size: 18px;
  margin: 24px 0;
  justify-content: space-between;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
}
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
  text-decoration: underline;
`;

const Date = styled.h3`
  font-size: 16px;
  color: #ababab;
  font-weight: normal;
  text-decoration: none;
`;

const IndexPage = ({ data }: any) => {
  const posts = data.allMarkdownRemark.edges
    .map(({ node }) => ({ ...node.frontmatter }));

  const renderPosts = () =>posts.map(({ title, date, slug }) => (
    <ListItem href={ slug } key={ slug }>
      <Title>{ title }</Title>
      <Date>{ date }</Date>
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
