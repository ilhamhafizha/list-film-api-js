class Typography {
  constructor(props) {
    const { variant, children, className, onclick } = props;
    this.variant = variant;
    this.children = children;
    this.className = className
    this.onclick = onclick;
  }
  VARIANTS = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
  };

  handleClick() {
    if (this.onclick) {
      this.onclick();
    } else {
      return;
    }
  }

  render() {
    const TypographyContainer = document.createElement(this.VARIANTS[this.variant]);
    TypographyContainer.onclick = this.handleClick.bind(this);
    TypographyContainer.className = this.className;
    TypographyContainer.innerHTML = this.children;
    return TypographyContainer;
  }
}

export default Typography;
