import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import {
  DropdownContainer,
  DropdownData,
  DropdownInput,
  DropdownItem,
  DropdownList,
} from "./Dropdown.styles";
import { useCallback, useEffect, useRef, useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select option",
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    options.find((option) => option.value === value) || null
  );

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }, []);
  const onSelect = (option: DropdownOption) => {
    onChange(option.value);
    setOpen(false);
    setSelectedOption(option);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <DropdownContainer ref={containerRef} className={className}>
      <DropdownInput onClick={() => setOpen(!open)}>
        {selectedOption ? (
          <DropdownData>{selectedOption.label}</DropdownData>
        ) : (
          <DropdownData>{placeholder}</DropdownData>
        )}
        <IconButton
          type={IconTypes.DOWN}
          onClick={() => setOpen(!open)}
          hasGesture={false}
        />
      </DropdownInput>
      {open && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              $disabled={option.disabled}
              onClick={() => {
                if (!option.disabled) {
                  onSelect(option);
                  setOpen(false);
                }
              }}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}
