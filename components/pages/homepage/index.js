import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import MovieList from "../../container/MovieList/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: true,
      FilterType: "",
      FilterYear: "",
      movieList: [],
    };
    this.homeContainer = document.createElement("div");
    this.init();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  init() {
    this.getDataMovie();
    this.render();
  }

  getDataMovie() {
    this.setState({ isLoading: true });
    let urlPath = "titles/x/upcoming";

    // add params
    if (this.state.FilterType !== "") {
      urlPath += `?titleType=${this.state.FilterType}`;
      if (this.state.FilterYear !== "") {
        urlPath += `&year=${this.state.FilterYear}`;
      }
    } else if (this.state.FilterYear !== "") {
      urlPath += `?year=${this.state.FilterYear}`;
    }

    fetchApi("GET", urlPath).then((data) => {
      this.setState({
        movieList: data.results,
      });
      this.setState({ isLoading: false });
    });
  }

  render() {
    this.homeContainer.innerHTML = "";
    const title = new Typography({ variant: "h1", children: "Homepage" });
    this.homeContainer.appendChild(title.render());
    this.homeContainer.appendChild(
      new FilterMovie({
        submitFilter: () => this.getDataMovie(),
        setType: (value) => this.setState({ FilterType: value }),
        setYear: (value) => this.setState({ FilterYear: value }),
        type: this.state.FilterType,
        year: this.state.FilterYear,
      }).render()
    );
    this.homeContainer.appendChild(new MovieList({ movieItems: this.state.movieList }).render());
    return this.homeContainer;
  }
}

export default Homepage;
