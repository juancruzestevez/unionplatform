import { useState, useEffect } from "react";
import ApiEndpoints from "../shared/ApiEndpoints";
import FetchService from "../shared/FetchService";
import { UsefulInfo } from "../shared/UsefulInfo";

interface useUsefulInfoParams {
  limit?: number;
}

const useUsefulInfo = ({ limit = 0 }: useUsefulInfoParams) => {
  const [isLoadingUsefulInfo, setIsLoadingUsefulInfo] = useState(true);
  const [usefulInfo, setUsefulInfo] = useState<UsefulInfo[]>([]);

  const fetchUsefulInfo = async () => {
    setIsLoadingUsefulInfo(true);

    const { usefulInfo } = await FetchService.request(
      ApiEndpoints.USEFUL_INFO_LIST,
      {
        body: JSON.stringify({ limit }),
      }
    );
    setUsefulInfo(usefulInfo);
    setIsLoadingUsefulInfo(false);
  };

  useEffect(() => {
    fetchUsefulInfo();
  }, []);
  return { isLoadingUsefulInfo, usefulInfo, fetchUsefulInfo };
};
export default useUsefulInfo;
