import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPHCMS_API_KEY

export const getPosts = async () => {
  const query = gql`query Posts {
        posts {
          createdAt
          featured
          id
          postIntro
          postUrl
          publishedAt
          title
          updatedAt
          author {
            bio
            email
            name
            id
            avatar {
              url
            }
          }
          imageUrl {
            url
          }
        }
      }
      `;
  const result = await request(graphqlAPI, query)
  return result.posts
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!){     
            post(where: {postUrl: $slug}) {
              author {
                name
                email
                avatar {
                  url
                }
              }
              content {
                raw
              }
              postIntro
              createdAt
              title
              imageUrl {
                url
              }
            }
       
          
    }
    `
  const result = await request(graphqlAPI, query, { slug })
  return result.post
}





