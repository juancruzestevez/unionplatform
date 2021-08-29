import React from "react";
import styled from "styled-components";

const PageContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ddd;
`;

export default PageContainer;
