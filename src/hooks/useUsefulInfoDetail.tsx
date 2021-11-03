import { useEffect, useState } from "react";
import { UsefulInfo } from "..//shared/UsefulInfo";

const fakeUsefulInfoFetch = (): Promise<UsefulInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        date: new Date(),
        title: "First article",
        description: "First article description",
        content:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum aspernatur eius. Ut et vero veritatis ad officiis nostrum magnam fugit neque, possimus consequatur voluptates eaque non atque perspiciatis reprehenderit?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum aspernatur eius. Ut et vero veritatis ad officiis nostrum magnam fugit neque, possimus consequatur voluptates eaque non atque perspiciatis reprehenderit?</p>",
      });
    }, 1000);
  });
};

const useUsefulInfoDetail = (id: string) => {
  const [usefulInfo, setUsefulInfo] = useState<UsefulInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsefulInfo = async () => {
    try {
      setIsLoading(true);
      //   const response = await fetch(`/api/news/${id}`);
      //   const json = await response.json();
      const json = await fakeUsefulInfoFetch();
      setUsefulInfo(json);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsefulInfo();
  }, [id]);

  return { usefulInfo, isLoading };
};
export default useUsefulInfoDetail;
