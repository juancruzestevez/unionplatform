import { Input as AntInput, InputProps as AntInputProps } from "antd";
import styled from "styled-components/macro";

interface InputProps {
  password?: boolean;
  small?: boolean;
}

const Input: React.FC<AntInputProps & InputProps> = ({
  password = false,
  small = false,
  ...props
}) => {
  if (password) {
    return <StyledAntInputPassword $smallStyle={small} {...props} />;
  }
  return <StyledAntInput $smallStyle={small} {...props} />;
};

interface StyledAntInputProps {
  $smallStyle?: boolean;
}

const StyledAntInput = styled(AntInput)<StyledAntInputProps>`
  width: 100%;
  font-size: 14px;
  padding: ${(props) => (props.$smallStyle ? "10px 26px" : "13px 26px")};
  border: 1px solid #e9e9e9;
  border-radius: 13px;
`;

const StyledAntInputPassword = styled(AntInput.Password)<StyledAntInputProps>`
  width: 100%;
`;

export default Input;
