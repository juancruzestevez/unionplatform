import { Spin } from "antd";
import React from "react";
import { useHistory } from "react-router";
import ContentContainer from "../components/ContentContainer";
import IncidentPreview from "../components/IncidentPreview";
import PageContainer from "../components/PageContainer";
import useIncidents from "../hooks/useIncidents";
import RoutesEnum from "../shared/RoutesEnum";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";

const IncidentsPage: React.FC = () => {
  const { incidents, isLoading } = useIncidents({});
  const history = useHistory();

  return (
    <PageContainer showHeader>
      <ContentContainer>
        <ButtonContainer>
          <PageTitle noMargin>Incidentes</PageTitle>
          <StyledButton onClick={() => history.push(RoutesEnum.INCIDENTS_NEW)}>
            Nuevo incidente
          </StyledButton>
        </ButtonContainer>
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
      </ContentContainer>
    </PageContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  width: auto;
`;
export default IncidentsPage;
