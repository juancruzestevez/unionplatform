import { Spin } from "antd";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";
import useNewsArticle from "../hooks/useNewsArticle";
import ContentContainer from "../components/ContentContainer";

import ExampleSrc from "../assets/img/example.jpg";
import styled from "styled-components";

interface NewsArticlePageUrlParams {
  id: string;
}

const NewsArticlePage = () => {
  let { id: articleId } = useParams<NewsArticlePageUrlParams>();

  const { article, isLoading } = useNewsArticle(articleId);

  return (
    <PageContainer showHeader>
      <ContentContainer>
        <Image src={ExampleSrc}></Image>
        {!isLoading ? (
          <>
            <Title>{article.title}</Title>
            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </>
        ) : (
          <Spin />
        )}
      </ContentContainer>
    </PageContainer>
  );
};

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 13px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
export default NewsArticlePage;
