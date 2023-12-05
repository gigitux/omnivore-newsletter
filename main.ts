import { getClient } from "@omnivoreClient";
import { sendEmail } from "@mailer";

if (import.meta.main) {
  const { getArticles, archiveArticle, getUser, getArticle } = getClient();

  const user = await getUser();

  const username = user.me.profile.username;
  const articles = await getArticles();

  if (articles.search.edges.length === 0) {
    Deno.exit(0);
  }

  const article = await getArticle({
    username: username,
    slug: articles.search.edges[0]?.node.slug,
    includeFriendsHighlights: false,
  });

  const { content, title } = article.article.article;

  await sendEmail({ content, title });

  await archiveArticle({
    linkId: article.article.article.id,
    archived: true,
  });
}

Deno.exit(0);
