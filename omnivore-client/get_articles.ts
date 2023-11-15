import { graphqlClient } from "@deps";
import { GraphQLClient } from "./graphql_client.ts";

type Response = {
  search: {
    edges: {
      cursor: string;
      node: {
        id: string;
        title: string;
        slug: string;
      };
    }[];
  };
};

const query = graphqlClient.gql`
query Search($after: String, $first: Int, $query: String) {
  search(first: $first, after: $after, query: $query) {
    ... on SearchSuccess {
      edges {
        cursor
        node {
          id
          title
          slug
        }
      }
    }
  }
}


`;

export const getArticles = (client: GraphQLClient) => (): Promise<Response> => {
  return client.request(query, {
    first: 50,
  });
};
