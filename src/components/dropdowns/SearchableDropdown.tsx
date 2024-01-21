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
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  onSelect,
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
    console.log(option);
    onSelect(option);
    setIsOpen(false);
    setFilterText(option.label);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <DropdownContainer>
      <DropdownInput>
        <StyledInput
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          ref={inputRef}
          onFocus={handleToggle}
          placeholder="Search Country"
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
