class Switch {
  constructor({ setLightMode, isChecked }) {
    this.switchButton = document.createElement('input');
    this.switchButton.type = 'checkbox';
    this.switchButton.id = 'switch-toggle-' + Math.random().toString(36).substr(2, 9);
    this.switchButton.className = 'switch-toggle';
    this.switchButton.checked = isChecked;

    this.switchLabel = document.createElement('label');
    this.switchLabel.htmlFor = this.switchButton.id;
    this.switchLabel.className = 'switch-label';

    this.attachEventListeners();
    this.setLightMode = setLightMode;
    this.isChecked = isChecked;
  }

  attachEventListeners() {
    this.switchButton.addEventListener('change', () => {
      this.onChange(this.switchButton.checked);
    });
  }

  onChange(isChecked) {
    if (typeof this.setLightMode === "function") {
      this.setLightMode(isChecked);
    }
  }

  render() {
    const container = document.createElement('div');
    container.className = 'switch-container';
    container.appendChild(this.switchButton);
    container.appendChild(this.switchLabel);
    return container;
  }
}

export default Switch;