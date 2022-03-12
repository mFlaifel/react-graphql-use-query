import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = `https://api.takeshape.io/project/${process.env.REACT_APP_PROJECT_ID}/v3/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

export const useGetPosts = () => {
  console.log('process.env', process.env);
  return useQuery('get-posts', async () => {
    const { getPostList } = await graphQLClient.request(gql`
      query {
        getPostList {
          items {
            _id
            title
            deck
            body
          }
        }
      }
    `);
    return getPostList;
  });
};

export const useGetPost = (postId: string) => {
  return useQuery(['get-post', postId], async () => {
    const { getPost } = await graphQLClient.request(
      gql`
        query getPost($postId: ID!) {
          getPost(_id: $postId) {
            _id
            title
            deck
            body
          }
        }
      `,
      { postId }
    );
    return getPost;
  });
};
