import { Button, Spin } from "antd";
import React from "react";
import { useHistory } from "react-router";
import IncidentPreview from "../components/IncidentPreview";
import PageContainer from "../components/PageContainer";
import useIncidents from "../hooks/useIncidents";
import RoutesEnum from "../shared/RoutesEnum";

const IncidentsPage: React.FC = () => {
  const { incidents, isLoading } = useIncidents();
  const history = useHistory();

  return (
    <PageContainer showHeader>
      <Button onClick={() => history.push(RoutesEnum.INCIDENTS_NEW)}>
        Nuevo incidente
      </Button>
      {!isLoading ? (
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <IncidentPreview incident={incident} />
            </li>
          ))}
        </ul>
      ) : (
        <Spin />
      )}
    </PageContainer>
  );
};
export default IncidentsPage;
