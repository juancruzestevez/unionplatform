import React from 'react';
import { InputProps as AntInputProps } from "antd";
import {
  Form,
  Input,
} from "antd";

interface InputProps {
  label: string;
  name: string;
  isRequired?: boolean;
}

const requiredRules = [{ required: true, message: "Dato requerido" }];

const FormInput: React.FC<AntInputProps & InputProps> = ({
  label,
  name,
  isRequired = false,
  ...props
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={isRequired ? requiredRules : []}
    >
      <Input {...props} />
    </Form.Item>
  );
}

export default FormInput;