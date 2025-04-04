import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputContainer, StyledLabel } from "../inputs.styles";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;

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
}
export const TextInput = ({
  placeholder = "",
  label,
  onChange,
  required = false,
  multiLine = false,
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
          rows={multiLine ? 5 : 1}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      ) : (
        <StyledInput
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}
    </InputContainer>
  );
};
