import React from "react";
import styled from "styled-components/macro";

interface ButtonProps {
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button``;

export default Button;
