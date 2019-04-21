import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";

const Footer = styled.div`
position: fixed;
left: 50%;
bottom: 0px;
transform: translate(-50%, -50%);
margin: 0 auto;
`;

const Main = styled.div`
  margin: 100px;
`

const Account = styled.a`
  text-decoration: none;
  color: cadetblue;
`

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Main>
          <Header siteTitle={data.site.siteMetadata.title} />

          <div>
            {children}
          </div>

          <Footer>
              <p>
                Made with ❤️ by <Account href="https://github.com/ayshiff">ayshiff</Account>
              </p>
          </Footer>
        </Main>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;