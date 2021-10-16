import React from "react";
import styled from "styled-components/macro";
import PageContainer from "../components/PageContainer";
import SignUpContainer from "../components/SignUpContainer";

const ForgotPasswordEmailSentPage: React.FC = () => {
  return (
    <PageContainer showBackButton>
      <SignUpContainer>
        <ContainerDiv>
          <h1>Se envio el email</h1>
        </ContainerDiv>
      </SignUpContainer>
    </PageContainer>
  );
};

const ContainerDiv = styled.div`
  width: 100%;
`;

export default ForgotPasswordEmailSentPage;
