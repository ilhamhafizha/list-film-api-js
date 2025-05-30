class Select {
  constructor(props) {
    const { option, selectedValue, onChange, width } = props;
    this.options = option;
    this.selectedValue = selectedValue;
    this.onChange = onChange;
    this.width = width;
  }

  render() {
    const select = document.createElement("select");
    select.className = "form-select";
    this.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      if (option.value === this.selectedValue) {
        optionElement.selected = true;
      }
      select.appendChild(optionElement);
    });

    select.addEventListener("change", (event) => {
      const value = event.target.value;
      this.onChange(value);
    });

    return select;
  }
}

export default Select;
