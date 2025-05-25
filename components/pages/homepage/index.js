import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
    };
  }
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
    homeContainer.appendChild(
      new Typography({
        variant: "p",
        children: `Count: ${this.state.count}`,
      }).render()
    );
    return homeContainer;
  }
}

export default Homepage;
