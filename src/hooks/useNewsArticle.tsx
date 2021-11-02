import { useEffect, useState } from "react";
import { NewsArticle } from "../shared/NewsArticle";

const fakeNewsArticleFetch = (): Promise<NewsArticle> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        title: "First article",
        description: "First article description",
        imageUrl: "https://google.com",
      });
    }, 1000);
  });
};

const useNewsArticle = (id: string) => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticle = async () => {
    try {
      setIsLoading(true);
      //   const response = await fetch(`/api/news/${id}`);
      //   const json = await response.json();
      const json = await fakeNewsArticleFetch();
      setArticle(json);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  return { article, isLoading };
};
export default useNewsArticle;
