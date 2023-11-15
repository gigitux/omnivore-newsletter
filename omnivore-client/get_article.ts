import { graphqlClient } from "@deps";
import { GraphQLClient } from "./graphql_client.ts";

type Response = {
  article: {
    article: {
      id: string;
      title: string;
      image: string;
      content: string;
      slug: string;
    };
  };
};

type Params = {
  username: string;
  slug: string;
  includeFriendsHighlights: boolean;
};

const query = graphqlClient.gql`
query GetArticle(
    $username: String!
    $slug: String!
  ) {
    article(username: $username, slug: $slug) {
      ... on ArticleSuccess {
        article {
          ...ArticleFields
          content
        }
      }
    }
  }

  fragment ArticleFields on Article {
  id
  title
  url
  author
  image
  savedAt
  createdAt
  publishedAt
  contentReader
  originalArticleUrl
  readingProgressPercent
  readingProgressTopPercent
  readingProgressAnchorIndex
  slug
  isArchived
  description
  linkId
  state
  wordsCount
}
  `;

export const getArticle =
  (client: GraphQLClient) =>
  (params: Params): Promise<Response> => {
    return client.request(query, {
      ...params,
    });
  };
