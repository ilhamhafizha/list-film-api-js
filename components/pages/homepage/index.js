import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
    };
    this.homeContainer = document.createElement("div");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.homeContainer.innerHTML = "";
    const title = new Typography({ variant: "h1", children: "Homepage" });
    this.homeContainer.appendChild(title.render());
    const homeButtonNavigate = new Button({
      text: "Go To DetailPage",
      variant: "primary",
      onclick: () => {
        window.location.hash = "detail";
      },
    });
    this.homeContainer.appendChild(homeButtonNavigate.render());
    this.homeContainer.appendChild(
      new Typography({
        variant: "p",
        children: `Count: ${this.state.count}`,
      }).render()
    );

    this.homeContainer.appendChild(
      new Button({
        text: "add",
        variant: "secondary",
        onclick: () => {
          this.setState({ count: this.state.count + 1 });
        },
      }).render()
    );
    this.homeContainer.appendChild(
      new Button({
        text: "subtract",
        variant: "secondary",
        onclick: () => {
          this.setState({ count: this.state.count - 1 });
        },
      }).render()
    );

    return this.homeContainer;
  }
}

export default Homepage;
