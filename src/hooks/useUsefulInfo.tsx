import { useEffect, useState } from "react";
import { UsefulInfo } from "../shared/UsefulInfo";

const fakeUsefulInfoFetch = (): Promise<UsefulInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          date: new Date(),
          title: "Useful Info 1",
          description: "Description 1",
          content: "",
        },
        {
          id: 2,
          date: new Date(),
          title: "Useful Info 2",
          description: "Description 2",
          content: "",
        },
      ]);
    }, 1000);
  });
};

const useUsefulInfo = ({ limit = null }: { limit?: number | null }) => {
  const [usefulInfo, setUsefulInfo] = useState<UsefulInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsefulInfos = async () => {
    try {
      setIsLoading(true);
      //   const response = await fetch("/api/news");
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
    fetchUsefulInfos();
  }, []);

  return {
    usefulInfo,
    isLoading,
    fetchUsefulInfos,
  };
};
export default useUsefulInfo;
