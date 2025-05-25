import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Detailpage {
  constructor(props) {}
  render() {
    const detailContainer = document.createElement("div");
    const title = new Typography({ variant: "h1", children: "Detail page" });
    detailContainer.appendChild(title.render()); // Perbaikan di sini
    const detailButtonNavigate = new Button({
      text: "Go To detailPage",
      variant: "primary",
      onclick: () => {
        window.location.hash = "";
      },
    });
    detailContainer.appendChild(detailButtonNavigate.render()); // Perbaikan di sini
    return detailContainer;
  }
}

export default Detailpage;
