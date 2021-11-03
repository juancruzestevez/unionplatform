import { useEffect, useState } from "react";
import { Incident } from "../shared/Incident";

const fakeIncidentsFetch = (): Promise<Incident[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          company: "Company 1",
          date: new Date(),
          description: "Description 1",
          image: "https://picsum.photos/200/300",
          place: "Place 1",
          reportedTo: "Reported to 1",
          role: "Role 1",
          situation: "Situation 1",
        },
        {
          id: 2,
          company: "Company 2",
          date: new Date(),
          description: "Description 2",
          image: "https://picsum.photos/200/300",
          place: "Place 1",
          reportedTo: "Reported to 1",
          role: "Role 1",
          situation: "Situation 1",
        },
      ]);
    }, 1000);
  });
};

const useIncidents = ({ limit = null }: { limit: number | null }) => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIncidents = async () => {
    try {
      setIsLoading(true);
      //   const response = await fetch("/api/news");
      //   const json = await response.json();
      const json = await fakeIncidentsFetch();
      setIncidents(json);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return {
    incidents,
    isLoading,
    fetchIncidents,
  };
};
export default useIncidents;
