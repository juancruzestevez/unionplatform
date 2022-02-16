import { Spin } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import ApiEndpoints from "../shared/ApiEndpoints";
import FetchService from "../shared/FetchService";
import { Incident, IncidentStatusLabel } from "../shared/Incident";
import { IncidentTypeLabelEnum } from "../shared/IncidentsTypes";

interface ViewIncidentsPageRouteParams {
  id: string;
}

const ViewIncidentsPage = () => {
  const match = useRouteMatch<ViewIncidentsPageRouteParams>();
  const incidentId = match.params.id;

  const [incident, setIncident] = useState<Incident>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIncident = async () => {
      setIsLoading(true);
      const { incident: newIncident } = await FetchService.request(
        ApiEndpoints.INCIDENT_DETAIL,
        {
          body: JSON.stringify({ incidentId }),
        }
      );
      setIncident(newIncident);
      setIsLoading(false);
    };
    fetchIncident();
  }, [incidentId]);

  return (
    <PageContainer showHeader>
      <ContentContainer>
        <PageTitle>Detalle de Incidente</PageTitle>
        {!isLoading ? (
          <div>
            <p>
              Fecha de carga:
              <br /> {moment(incident.createdAt).format("DD/MM/YYYY")}
            </p>
            <p>
              Estado:
              <br /> {IncidentStatusLabel[incident.status]}
            </p>
            <p>
              Situación:
              <br /> {IncidentTypeLabelEnum[incident.situation]}
            </p>
            <p>
              Puesto:
              <br /> {incident.role}
            </p>
            <p>
              Lugar:
              <br /> {incident.place}
            </p>
            <p>
              Descripción:
              <br /> {incident.description}
            </p>
            <p>
              Reportado a:
              <br /> {incident.reportedTo ? incident.reportedTo : "-"}
            </p>

            {incident.images && (
              <p>
                Archivos adjuntos:
                <br />
                {incident.images.map(({ fileName, url }) => (
                  <>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      key={fileName}
                    >
                      {fileName}
                    </a>
                    <br />
                  </>
                ))}
              </p>
            )}
          </div>
        ) : (
          <Spin />
        )}
      </ContentContainer>
    </PageContainer>
  );
};
export default ViewIncidentsPage;
