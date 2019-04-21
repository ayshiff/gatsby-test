import React, { useState, useEffect } from "react";
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import { navigate } from "gatsby"

const ProjectElement = ({ className, title, content }) => 
<div onClick={() => navigate(`/${title}/`)} className={className}>
    <h3>{title}</h3>
</div> 

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

const Card = styled(ProjectElement)`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px; /* 5px rounded corners */
width: 300px;
padding: 20px;
color: cadetblue;
&:hover {
    background: cadetblue;
    color: white;
    cursor: pointer;
  }
margin: 10px;
`

export default ({ data }) => {    

    const projects = () => data.allPrismicProject.edges.map(project => {
        const title = project.node.uid

        return <Card key={title} title={title}/>
    })

    return (
        <Layout>
            <Wrapper>
                {projects()}
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
query {
    allPrismicProject {
      edges {
        node {
          id
          uid
    }
  }
}
}`