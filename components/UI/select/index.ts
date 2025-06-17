import SelectProps from "./select.type";

class Select {
  options: { value: string; text: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  width: string;

  constructor(props: SelectProps) {
    const { options, selectedValue, onChange, width } = props;
    this.options = options;
    this.selectedValue = selectedValue;
    this.onChange = onChange;
    this.width = width;
  }

  render() {
    const select = document.createElement("select");
    select.className = "form-select";
    this.options.forEach((option) => {
      const optionsElement = document.createElement("option");
      optionsElement.value = option.value;
      optionsElement.textContent = option.text;
      if (option.value === this.selectedValue) {
        optionsElement.selected = true;
      }
      select.appendChild(optionsElement);
    });

    select.addEventListener("change", (event) => {
      const target = event.target as HTMLSelectElement | null;
      if (target) this.onChange(target.value);
    });

    return select;
  }
}

export default Select;
