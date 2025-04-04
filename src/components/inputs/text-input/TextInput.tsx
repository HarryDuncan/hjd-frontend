import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputContainer, StyledLabel } from "../inputs.styles";

// Define the custom input component
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Additional custom props can be added here
  type?: "text" | "password";
}

type CustomTextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>;
const StyledInput = styled.input<CustomInputProps>`
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
`;

const StyledTextArea = styled.textarea<CustomTextAreaProps>`
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
`;

interface TextInputProps {
  label: string;
  onChange: (newValue: string) => void;
  required?: boolean;
  placeholder?: string;
  multiLine?: boolean;
  type?: "text" | "password" | undefined;
}
export const TextInput = ({
  placeholder = "",
  label,
  onChange,
  required = false,
  multiLine = false,
  type = "text",
}: TextInputProps) => {
  const handleInputChange = (value: string) => {
    onChange(value);
  };
  return (
    <InputContainer>
      <StyledLabel>
        {label} {required && <span>*</span>}
      </StyledLabel>
      {multiLine ? (
        <StyledTextArea
          type={type}
          rows={multiLine ? 5 : 1}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      ) : (
        <StyledInput
          type={type}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}
    </InputContainer>
  );
};
