import { graphQLClient } from "./graphql_client.ts";
import { getArticles } from "./get_articles.ts";
import { archiveArticle } from "./archive_article.ts";
import { getArticle } from "./get_article.ts";
import { getUser } from "./get_user.ts";

export const getClient = () => ({
  getArticles: getArticles(graphQLClient),
  getArticle: getArticle(graphQLClient),
  getUser: getUser(graphQLClient),
  archiveArticle: archiveArticle(graphQLClient),
});
