import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor(props) {}
  render() {
    const homeContainer = document.createElement("div");
    const title = new Typography({ variant: "h1", children: "Homepage" });
    homeContainer.appendChild(title.render()); // Perbaikan di sini
    const homeButtonNavigate = new Button({
      text: "Go To DetailPage",
      variant: "primary",
      onclick: () => {
        window.location.hash = "detail";
      },
    });
    homeContainer.appendChild(homeButtonNavigate.render()); // Perbaikan di sini
    return homeContainer;
  }
}

export default Homepage;
