import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import MainMenu from "./MainMenu";
import { MenuOutlined } from "@ant-design/icons";

interface PageContainerProps {
  showBackButton?: boolean;
  showHeader?: boolean;
  title?: string | null;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  showBackButton = false,
  showHeader = false,
  title = null,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const history = useHistory();

  return (
    <>
      <Container isMenuVisible={isMenuVisible}>
        {showBackButton && history.length && (
          <BackButton onClick={() => history.goBack()}>←</BackButton>
        )}
        {showHeader && (
          <HeaderContainer>
            {!showBackButton ? (
              <MenuToggleIcon onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <MenuOutlined />
              </MenuToggleIcon>
            ) : (
              <div>a</div>
            )}
            <HeaderTitle>{title}</HeaderTitle>
            <LogoContainer>Logo</LogoContainer>
          </HeaderContainer>
        )}

        {children}
      </Container>
      <MainMenu isVisible={isMenuVisible} />
    </>
  );
};

const Container = styled.div<{ isMenuVisible: boolean }>`
  width: 100%;
  min-height: 100vh;
  background-color: #ddd;
  position: relative;
  transform: translateX(${(props) => (props.isMenuVisible ? "258px" : 0)});
  transition: transform 0.5s ease 0s;
`;

const BackButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
`;

const HeaderContainer = styled.div`
  background: #ddd;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
`;
const HeaderTitle = styled.h1``;
const MenuToggleIcon = styled.div``;
const LogoContainer = styled.div``;

export default PageContainer;
