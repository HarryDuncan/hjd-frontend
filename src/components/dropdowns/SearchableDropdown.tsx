import React, { useState, useEffect, useRef } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  DropdownInput,
} from "./Dropdown.styles";

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
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [filterText, setFilterText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setFilterText("");
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setFilterText("");
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle}>
        {selectedOption ? selectedOption.label : "Select an option"}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownInput
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            ref={inputRef}
          />
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
