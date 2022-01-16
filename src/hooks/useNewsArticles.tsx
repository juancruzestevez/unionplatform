import { useEffect, useState } from "react";
import { NewsArticle } from "../shared/NewsArticle";
import FetchService from "../shared/FetchService";
import ApiEndpoints from "../shared/ApiEndpoints";

const useNewsArticles = ({ limit = null }: { limit?: number | null }) => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewsArticles = async () => {
    try {
      setIsLoading(true);
      const { news } = await FetchService.request(ApiEndpoints.NEWS_LIST);
      setNewsArticles(news);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  return {
    newsArticles,
    isLoading,
    fetchNewsArticles,
  };
};
export default useNewsArticles;
