import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { DropdownIconUp } from "@/assets/icons/DropdownIcon";
import React, { useState } from "react";

interface Props {
  options: {
    label: any;
    value: string;
  }[];
  onChange: (value: any) => void;
}

const CustomSelect: React.FC<Props> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0].value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative  min-w-48">
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="block appearance-none w-full bg-transparent border border-gray-300 text-white py-2 rounded-lg leading-tight focus:outline-none focus:border-gray-500"
        >
          {options.find((option) => option.value === selectedOption)?.label}
        </button>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <DropdownIconUp color="white" />
        </div>
      </div>
      <div className={`absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`py-2 px-4 cursor-pointer hover:bg-gray-200 text-black flex justify-center ${option.value === selectedOption ? 'bg-gray-200' : ''}`}
            onClick={() => handleSelectOption(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
