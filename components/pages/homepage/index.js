import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: false,
    };
    this.homeContainer = document.createElement("div");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDataMovie() {
    this.setState({ isLoading: true });
    fetchApi("GET", "titles/x/upcoming").then((data) => {
      console.log(data);
      this.setState({ isLoading: false });
    });
  }

  render() {
    this.homeContainer.innerHTML = "";
    const title = new Typography({ variant: "h1", children: "Homepage" });
    this.homeContainer.appendChild(title.render());
    this.homeContainer.appendChild(new FilterMovie({ submitFilter: () => this.getDataMovie() }).render());
    return this.homeContainer;
  }
}

export default Homepage;
