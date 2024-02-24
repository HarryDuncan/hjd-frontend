import React, { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownList,
  DropdownItem,
  DropdownInput,
} from "./Dropdown.styles";
import { StyledInput } from "components/inputs/inputs.styles";

export interface DropdownOption {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  options: DropdownOption[];
  onSelect: (selectedOption: DropdownOption | null) => void;
  placeHolder: string;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  onSelect,
  placeHolder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
    setFilterText(option.label);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isOpen) {
      setIsOpen(true);
    }
    setFilterText(value);
  };

  return (
    <DropdownContainer>
      <DropdownInput>
        <StyledInput
          type="text"
          value={filterText}
          onChange={handleOnChange}
          ref={inputRef}
          onFocus={handleToggle}
          onBlur={handleToggle}
          placeholder={placeHolder}
        />
      </DropdownInput>
      {isOpen && (
        <DropdownList>
          {filteredOptions.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
