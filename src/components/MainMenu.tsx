import React from "react";
import { Menu } from "antd";
import styled from "styled-components/macro";
import {
  HomeOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import RoutesEnum from "../shared/RoutesEnum";

interface MainMenuProps {
  isVisible: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ isVisible }) => {
  const history = useHistory();

  const goTo = (route: string) => history.push(route);

  return (
    <Container isVisible={isVisible}>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={() => goTo(RoutesEnum.HOME)}
        >
          Inicio
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<MessageOutlined />}
          onClick={() => goTo(RoutesEnum.NEWS)}
        >
          Noticias
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<WarningOutlined />}
          onClick={() => goTo(RoutesEnum.INCIDENTS)}
        >
          Incidentes
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<InfoCircleOutlined />}
          onClick={() => goTo(RoutesEnum.USEFUL_INFORMATION)}
        >
          Información Útil
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<UserOutlined />}
          onClick={() => goTo(RoutesEnum.PROFILE)}
        >
          Perfil
        </Menu.Item>
      </Menu>
    </Container>
  );
};

const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(${(props) => (props.isVisible ? "0" : "-100%")});
  transition: transform 0.5s ease 0s;
`;
export default MainMenu;
