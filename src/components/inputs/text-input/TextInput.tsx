import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputContainer, StyledLabel } from "../inputs.styles";

// Define the custom input component
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Additional custom props can be added here
  type?: "text" | "password";
}

const StyledInput = styled.input<CustomInputProps>`
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  /* Custom styling based on type prop */
  ${({ type }) =>
    type === "password" &&
    `

  `}
`;

interface TextInputProps {
  label: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: "text" | "password" | undefined;
}
export const TextInput = ({
  placeholder = "",
  label,
  onChange,
  type = "text",
}: TextInputProps) => {
  const handleInputChange = (value: string) => {
    onChange(value);
  };
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </InputContainer>
  );
};
