import { Spin } from "antd";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";
import ContentContainer from "../components/ContentContainer";

import styled from "styled-components";
import useUsefulInfoDetail from "../hooks/useUsefulInfoDetail";

interface UsefulInfoDetailPageUrlParams {
  id: string;
}

const UsefulInfoDetailPage = () => {
  let { id: usefulInfoId } = useParams<UsefulInfoDetailPageUrlParams>();

  const { usefulInfo, isLoading } = useUsefulInfoDetail(usefulInfoId);

  return (
    <PageContainer showHeader>
      <ContentContainer>
        {!isLoading ? (
          <>
            <Title>{usefulInfo.title}</Title>
            <div dangerouslySetInnerHTML={{ __html: usefulInfo.content }}></div>
          </>
        ) : (
          <Spin />
        )}
      </ContentContainer>
    </PageContainer>
  );
};

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
export default UsefulInfoDetailPage;
