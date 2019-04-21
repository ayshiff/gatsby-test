require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Test',
    menuLinks:[
      {
         name:'home',
         link:'/'
      },
      {
         name:'contact',
         link:'/contact'
      },
      {
        name:'404',
        link:'/404'
     },
     {
      name:'project',
      link:'/project'
   },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `gatsby-test-swapcard`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    `gatsby-plugin-styled-components`
  ]
};
