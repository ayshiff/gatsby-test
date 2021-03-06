import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
  border-radius: 5px;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const Image = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default ({ data: { allPrismicHome : { edges } } }) => (
  <Layout>
  <Container>
    <h3>{edges[0].node.data.title.text}</h3>
    <Image src={edges[0].node.data.image.url} alt="profile_pic" />
    <div dangerouslySetInnerHTML={{ __html: edges[0].node.data.description.html }} />

  </Container>
  </Layout>
)

export const query = graphql`
{
  allPrismicHome {
    edges {
      node {
        data {
          title {
            text
          }
          image {
            url
          }
          description {
            html
          }
        }
      }
    }
  }
}`