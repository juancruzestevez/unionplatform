import { Spin } from "antd";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";
import useNewsArticle from "../hooks/useNewsArticle";

interface NewsArticlePageUrlParams {
  id: string;
}

const NewsArticlePage = () => {
  let { id: articleId } = useParams<NewsArticlePageUrlParams>();

  const { article, isLoading } = useNewsArticle(articleId);

  return (
    <PageContainer showHeader>
      <h1>NewsArticlePage</h1>
      <h2>Article {articleId}</h2>
      {!isLoading ? (
        <>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </>
      ) : (
        <Spin />
      )}
    </PageContainer>
  );
};
export default NewsArticlePage;
