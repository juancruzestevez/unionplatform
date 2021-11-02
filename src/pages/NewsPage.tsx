import { Spin } from "antd";
import React from "react";
import NewsArticlePreview from "../components/NewsArticlePreview";
import PageContainer from "../components/PageContainer";
import useNewsArticles from "../hooks/useNewsArticles";

const NewsPage: React.FC = () => {
  const { newsArticles, isLoading } = useNewsArticles();

  console.log(newsArticles);

  return (
    <PageContainer showHeader>
      {!isLoading ? (
        <ul>
          {newsArticles.map((newsArticle) => (
            <li key={newsArticle.id}>
              <NewsArticlePreview newsArticle={newsArticle} />
            </li>
          ))}
        </ul>
      ) : (
        <Spin />
      )}
    </PageContainer>
  );
};
export default NewsPage;
