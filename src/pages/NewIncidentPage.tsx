import {
  Button as AntButton,
  Form,
  Input,
  message,
  Select,
  Upload,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import { UploadOutlined } from "@ant-design/icons";
import ContentContainer from "../components/ContentContainer";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import FetchService from "../shared/FetchService";
import ApiEndpoints from "../shared/ApiEndpoints";
import { useHistory } from "react-router-dom";
import RoutesEnum from "../shared/RoutesEnum";

interface FormValues {
  situation: string;
  role: string;
  place: string;
  description: string;
  image: string;
}

const NewIncidentPage: React.FC = () => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const submit = async (formValues: FormValues) => {
    const closeLoading = message.loading("Enviando incidente...");
    try {
      setIsSubmitting(true);
      const { description, image, place, role, situation } = formValues;
      await FetchService.request(ApiEndpoints.INCIDENT_ADD, {
        body: JSON.stringify({
          description,
          image: "",
          place,
          role,
          situation,
        }),
      });
      setIsSubmitting(false);
      closeLoading();
      message.success("Incidente enviado!", 2000);
      history.push(RoutesEnum.INCIDENTS);
    } catch (e) {
      console.log(e);
      message.error(e.message || "Error al ingresar");
    } finally {
      setIsSubmitting(false);
      closeLoading();
    }
  };

  return (
    <PageContainer showHeader>
      <ContentContainer>
        <PageTitle>Nuevo incidente</PageTitle>
        <Form onFinish={submit}>
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

          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Enviar
          </Button>
        </Form>
      </ContentContainer>
    </PageContainer>
  );
};
export default NewIncidentPage;
