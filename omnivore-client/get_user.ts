import { graphqlClient } from "@deps";
import { GraphQLClient } from "./graphql_client.ts";

type Response = {
  me: {
    profile: {
      id: string;
      username: string;
    };
  };
};

const query = graphqlClient.gql`
query Viewer {
    me {
      profile {
        id
        username
      }
    }
}`;

export const getUser = (client: GraphQLClient) => (): Promise<Response> => {
  return client.request(query);
};
