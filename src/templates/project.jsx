import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { navigate } from "gatsby";

const ExtendedCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 70vw;
  height: 50vh;
  padding: 20px;
  color: cadetblue;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: cadetblue;
    color: white;
    cursor: pointer;
  }

  color: cadetblue;
  border: 1px solid cadetblue;
`;

const Post = ({ data: { prismicProject } }) => {
  const { data } = prismicProject;
  return (
    <Layout>
      <ExtendedCard>
        <h3>{data.title.text}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.text.html }} />
        <Button onClick={() => navigate("/projects/")}>Back to projects</Button>
      </ExtendedCard>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        text {
          html
        }
      }
    }
  }
`;
