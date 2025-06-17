import Switch from "../../UI/switch/index.ts";
import Typography from "../../UI/typography/index.ts";
import NavigationProps from "./navigation.type.ts";

class Navigation {
  navigationContainer: HTMLDivElement;
  setLightMode: (value: boolean) => void;
  isLightMode: boolean;

  constructor({ setLightMode, isLightMode }: NavigationProps) {
    this.navigationContainer = document.createElement("div");
    this.navigationContainer.className = "navigation-container";
    this.setLightMode = setLightMode;
    this.isLightMode = isLightMode;
  }

  render() {
    const containerLeft = document.createElement("div");
    containerLeft.className = "container-left";
    const title = new Typography({ variant: "h1", children: "MOVIE LIST", className: "" });
    containerLeft.appendChild(title.render());
    const homeLink = new Typography({
      variant: "h5",
      children: "Home",
      className: "",
      onclick: () => (window.location.hash = ""),
    });
    containerLeft.appendChild(homeLink.render());
    const aboutLink = new Typography({
      variant: "h5",
      children: "About",
      className: "",
      onclick: () => (window.location.hash = "about"),
    });
    containerLeft.appendChild(aboutLink.render());
    this.navigationContainer.appendChild(containerLeft);
    this.navigationContainer.appendChild(
      new Switch({
        setLightMode: this.setLightMode,
        isChecked: this.isLightMode,
      }).render()
    );
    return this.navigationContainer;
  }
}

export default Navigation;
