import React, { useState } from "react";
import { Form, message } from "antd";
import styled from "styled-components/macro";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import SignUpContainer from "../components/SignUpContainer";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import RoutesEnum from "../shared/RoutesEnum";

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submit = async (formValues: FormValues) => {
    const closeLoading = message.loading("Ingresando");
    try {
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 2000));
      history.push(RoutesEnum.HOME);
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
      closeLoading();
    }
  };

  return (
    <PageContainer>
      <SignUpContainer>
        <ContainerDiv>
          <h1>Login</h1>
          <Form onFinish={submit}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Ingresa tu email" }]}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Ingresa tu contraseña" }]}
            >
              <Input placeholder="Contraseña" type="password" />
            </Form.Item>
            <Button disabled={isSubmitting}>Ingresar &gt;</Button>
          </Form>
          <BottomLinks>
            <PageLink onClick={() => history.push(RoutesEnum.SIGNUP)}>
              Crear cuenta afiliada
            </PageLink>
            <PageLink onClick={() => history.push(RoutesEnum.FORGOT_PASSWORD)}>
              Olvidé mi contraseña
            </PageLink>
          </BottomLinks>
        </ContainerDiv>
      </SignUpContainer>
    </PageContainer>
  );
};

const ContainerDiv = styled.div`
  width: 100%;
`;

const BottomLinks = styled.div``;

const PageLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 10px;
`;

export default LoginPage;
