import styled from "styled-components";

const ContentContainer: React.FC = ({ children }) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};
const StyledContentContainer = styled.div`
  padding: 20px 30px;
`;

export default ContentContainer;
