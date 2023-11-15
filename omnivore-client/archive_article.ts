import { graphqlClient } from "@deps";
import { GraphQLClient } from "./graphql_client.ts";

type ArchiveLinkInput = {
  linkId: string;
  archived: true;
};

const query = graphqlClient.gql`
    mutation SetLinkArchived($input: ArchiveLinkInput!) {
    setLinkArchived(input: $input) {
      ... on ArchiveLinkSuccess {
        linkId
        message
      }
      ... on ArchiveLinkError {
        message
        errorCodes
      }
    }
  }
`;

export const archiveArticle =
  (graphQLClient: GraphQLClient) => (input: ArchiveLinkInput) => {
    return graphQLClient.request(query, { input });
  };
