import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

interface PageContainerProps {
  showBackButton?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  showBackButton = false,
}) => {
  const history = useHistory();

  return (
    <Container>
      {showBackButton && history.length && (
        <BackButton onClick={() => history.goBack()}>←</BackButton>
      )}
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ddd;
  position: relative;
`;

const BackButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
`;

export default PageContainer;
