import { Button as AntButton, Form, Input, Select, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import PageContainer from "../components/PageContainer";
import { UploadOutlined } from "@ant-design/icons";
import ContentContainer from "../components/ContentContainer";
import Button from "../components/Button";

const NewIncidentPage: React.FC = () => {
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <PageContainer showHeader title="Report incidents">
      <ContentContainer>
        <Form>
          <Form.Item
            name="situation"
            label="Situación"
            rules={[{ required: true, message: "Dato requerido" }]}
          >
            <Select placeholder="Seleccione la situación">
              <Select.Option value="male">Test</Select.Option>
              <Select.Option value="female">Test 2</Select.Option>
              <Select.Option value="other">Test 3</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="role"
            label="Puesto"
            rules={[
              {
                required: true,
                message: "Dato requerido",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="place"
            label="Lugar del incidente"
            rules={[
              {
                required: true,
                message: "Dato requerido",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Descripción del incidente"
            rules={[
              {
                required: true,
                message: "Dato requerido",
              },
            ]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item name="reportedTo" label="Reportado a">
            <TextArea />
          </Form.Item>

          <Form.Item
            name="image"
            label="Agregar imagen"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <AntButton icon={<UploadOutlined />}>Elegir imagen</AntButton>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form>
      </ContentContainer>
    </PageContainer>
  );
};
export default NewIncidentPage;
