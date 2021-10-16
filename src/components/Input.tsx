import { Input as AntInput, InputProps as AntInputProps } from "antd";
import styled from "styled-components/macro";

interface InputProps {
  password?: boolean;
}

const Input: React.FC<AntInputProps & InputProps> = ({
  password = false,
  ...props
}) => {
  if (password) {
    return <StyledAntInputPassword {...props} />;
  }
  return <StyledAntInput {...props} />;
};

const StyledAntInput = styled(AntInput)`
  width: 100%;
`;

const StyledAntInputPassword = styled(AntInput.Password)`
  width: 100%;
`;

export default Input;
