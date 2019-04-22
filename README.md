## Gatsby-JS-test

This project is a demo-app including **gatsby-js**, **flow** type-checking, sourcing from **Prismic**,
**zapier webhooks** to handle form and **styled components** for style.

## Installation

- Clone the project : `git clone https://github.com/ayshiff/gatsby-test.git`
- `cd gatsby-test`
- `npm install && npm start`


## Zapier WebHooks

The data is directly send to an adress mail where i can gather all the informations.

## GraphQL - Prismic

Project has the following structure:
```
title => text
text => html
```

Home has the following structure:
```
title => text
image => url
description => html
```

List of graphQL query used:

- Home content:

```graphql
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
}
```

- Project by slug:

```graphql
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
`
```

- All projects

```graphql
query {
    allPrismicProject {
      edges {
        node {
          id
          uid
    }
  }
}
}
```

## Deployment

I used heroku for the deployment process.   
You can see the project live on https://swapcard-test.herokuapp.com/