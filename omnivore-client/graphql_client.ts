import { graphqlClient } from "@deps";
import { OMNIVORE_KEY } from "@env";

export const OMNIVORE_ENDPOINT = "https://api-prod.omnivore.app/api/graphql";

export type GraphQLClient = graphqlClient.GraphQLClient;

export const graphQLClient = new graphqlClient.GraphQLClient(
  OMNIVORE_ENDPOINT,
  {
    headers: {
      authorization: OMNIVORE_KEY as string,
      contentType: "application/json",
    },
  }
);
