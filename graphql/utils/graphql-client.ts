import { GraphQLClient } from "graphql-request";

export const graphqlRequestClient = new GraphQLClient('http://localhost:1337/graphql', {
  mode: 'cors',
})