import { useHistory } from "react-router";
import { NewsArticle } from "../shared/NewsArticle";
import RoutesEnum from "../shared/RoutesEnum";

interface NewsArticlePreviewProps {
  newsArticle: NewsArticle;
}

const NewsArticlePreview: React.FC<NewsArticlePreviewProps> = ({
  newsArticle,
}) => {
  const history = useHistory();

  const articleRoute = RoutesEnum.NEWS_ARTICLE.replace(":id", newsArticle.id);

  const onClick = (e) => {
    e.preventDefault();
    history.push(articleRoute);
  };

  return (
    <div className="news-article-preview">
      <a href={articleRoute} onClick={onClick}>
        <h2>{newsArticle.title}</h2>
        <p>{newsArticle.description}</p>
        <span>----------</span>
      </a>
    </div>
  );
};
export default NewsArticlePreview;
