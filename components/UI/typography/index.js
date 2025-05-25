class Typography {
  constructor(props) {
    const { variant, children } = props;
    this.variant = variant;
    this.children = children;
  }
  VARIANTS = {
    h1: "h1",
    h2: "h1",
    h3: "h1",
    h4: "h1",
    h5: "h1",
    h6: "h1",
    p: "p",
  };

  render() {
    const TypographyContainer = document.createElement(this.VARIANTS[this.variant]);
    TypographyContainer.innerHTML = this.children;
    return TypographyContainer;
  }
}

export default Typography;
