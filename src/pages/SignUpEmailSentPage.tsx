import React from "react";
import styled from "styled-components/macro";
import PageContainer from "../components/PageContainer";
import SignUpContainer from "../components/SignUpContainer";

const SignUpEmailSentPage: React.FC = () => {
  return (
    <PageContainer showBackButton>
      <SignUpContainer>
        <ContainerDiv>
          <h1>
            Se envio un email con un link de activación. Una vez que hayas
            activado tu cuenta podrás ingresar.
          </h1>
        </ContainerDiv>
      </SignUpContainer>
    </PageContainer>
  );
};

const ContainerDiv = styled.div`
  width: 100%;
`;

export default SignUpEmailSentPage;
