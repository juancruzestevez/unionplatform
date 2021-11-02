import { useEffect, useState } from "react";
import { NewsArticle } from "../shared/NewsArticle";

const fakeNewsArticlesFetch = (): Promise<NewsArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "First article",
          description: "First article description",
          imageUrl: "https://google.com",
        },
        {
          id: "2",
          title: "Second article",
          description: "Second article description",
          imageUrl: "https://google.com",
        },
      ]);
    }, 1000);
  });
};

const useNewsArticles = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewsArticles = async () => {
    try {
      setIsLoading(true);
      //   const response = await fetch("/api/news");
      //   const json = await response.json();
      const json = await fakeNewsArticlesFetch();
      setNewsArticles(json);
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
