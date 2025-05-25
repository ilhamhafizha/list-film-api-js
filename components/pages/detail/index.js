import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Detailpage {
  constructor() {}
  render() {
    const detailContainer = document.createElement("div");
    const title = new Typography({ variant: "h1", children: "Detail page" });
    detailContainer.appendChild(title.render()); 
    const detailButtonNavigate = new Button({
      text: "Go To detailPage",
      variant: "primary",
      onclick: () => {
        window.location.hash = "";
      },
    });
    detailContainer.appendChild(detailButtonNavigate.render()); 
    return detailContainer;
  }
}

export default Detailpage;
