interface SelectProps {
  options: { value: string; text: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  width: string;
}

export default SelectProps;
