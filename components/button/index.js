class Button {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    this.variant = "primary";
  }

  handleClick() {
    if (this.variant === "primary") {
      console.log("Primary button clicked");
      this.variant = "secondary"; // Change variant for next click
    } else {
      console.log("Secondary button clicked");
      this.variant = "primary"; // Change variant back for next click
    }
  }

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.addEventListener("click", this.handleClick.bind(this));
    return button;
  }
}

export default Button;
