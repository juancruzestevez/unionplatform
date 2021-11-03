import React from "react";
import useUsefulInfo from "../hooks/useUsefulInfo";
import ContentContainer from "../components/ContentContainer";
import PageContainer from "../components/PageContainer";
import UsefulInfoPreview from "../components/UsefulInfoPreview";
import { Spin } from "antd";
import PageTitle from "../components/PageTitle";

const UsefulInformationPage: React.FC = () => {
  const { usefulInfo, isLoading } = useUsefulInfo({});

  return (
    <PageContainer showHeader>
      <ContentContainer>
        <PageTitle>Información Útil</PageTitle>
        {!isLoading ? (
          usefulInfo.map((usefulInfo) => (
            <UsefulInfoPreview usefulInfo={usefulInfo} />
          ))
        ) : (
          <Spin />
        )}
      </ContentContainer>
    </PageContainer>
  );
};
export default UsefulInformationPage;
