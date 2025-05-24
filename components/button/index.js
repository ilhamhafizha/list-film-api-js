class Button {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button clicked!");
  }

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.addEventListener("click", this.handleClick.bind(this));
    return button;
  }
}
