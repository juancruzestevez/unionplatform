import React from "react";
import PageContainer from "../components/PageContainer";
import ContentContainer from "../components/ContentContainer";
import { Form } from "antd";
import Button from "../components/Button";
import Input from "../components/Input";
import PageTitle from "../components/PageTitle";

const ProfilePage: React.FC = () => {
  return (
    <PageContainer showHeader>
      <ContentContainer>
        <PageTitle>Perfil</PageTitle>
        <Form>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Ingresa tu nombre" }]}
          >
            <Input small placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Ingresa tu apellido" }]}
          >
            <Input small placeholder="Apellido" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Ingresa tu email" }]}
          >
            <Input small placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Ingrese teléfono" }]}
          >
            <Input small placeholder="Teléfono de contacto" type="number" />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Ingrese ciudad" }]}
          >
            <Input small placeholder="Ciudad" />
          </Form.Item>
          <Form.Item name="affiliateNumber">
            <Input small placeholder="Nro Afiliado (si tienes uno)" />
          </Form.Item>

          <Button submit>Guardar</Button>
        </Form>
      </ContentContainer>
    </PageContainer>
  );
};
export default ProfilePage;
