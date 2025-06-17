import Typography from "../../UI/typography/index.js";

class Footer {
  footerContainer: HTMLDivElement;
  constructor() {
    this.footerContainer = document.createElement("div");
    this.footerContainer.className = "footer-container";
  }
  init() {
    this.render();
  }
  render() {
    this.footerContainer.innerHTML = ``;
    const copyrightText = new Typography({
      variant: "p",
      children: "© 2025 MovieList. All rights reserved.",
      className: "footer-text",
    });
    this.footerContainer.appendChild(copyrightText.render());
    return this.footerContainer;
  }
}

export default Footer;
