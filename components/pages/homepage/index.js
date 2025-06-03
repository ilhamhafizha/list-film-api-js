import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import MovieList from "../../container/MovieList/index.js";
import Loader from "../../UI/loader/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: true,
      FilterType: "",
      FilterYear: "",
      movieList: [],
      page: 1,
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

  getDataMovie(pageParam = 1, type = "get") {
    this.setState({ isLoading: true });
    const page = type === "get" ? 1 : pageParam;
    let urlPath = `titles/x/upcoming?limit=4&page=${page}`;

    // add params
    if (this.state.FilterType !== "") {
      urlPath += `&titleType=${this.state.FilterType}`;
    }
    if (this.state.FilterYear !== "") {
      urlPath += `&year=${this.state.FilterYear}`;
    }

    fetchApi("GET", urlPath)
      .then((data) => {
        if (type === "get") {
          this.setState({
            movieList: data.results,
          });
        } else {
          this.setState({
            movieList: [...this.state.movieList, ...data.results],
          });
        }
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  loadMoreMovie() {
    const nextPage = this.state.page + 1; // Hitung halaman berikutnya
    this.setState({ isLoading: true, page: nextPage }); // Perbarui state
    this.getDataMovie(nextPage, "load"); // Gunakan nilai nextPage
  }

  render() {
    this.homeContainer.innerHTML = "";
    const title = new Typography({ variant: "h1", children: "FASTMOVIE" });
    this.homeContainer.appendChild(title.render());

    const caption1 = new Typography({ variant: "h1", children: "MOVIE WEB" });
    this.homeContainer.appendChild(caption1.render());

    const caption2 = new Typography({ variant: "h1", children: "USING VANILA", className: "caption2" });
    this.homeContainer.appendChild(caption2.render());

    this.homeContainer.appendChild(
      new FilterMovie({
        submitFilter: () => this.getDataMovie(),
        setType: (value) => this.setState({ FilterType: value }),
        setYear: (value) => this.setState({ FilterYear: value }),
        type: this.state.FilterType,
        year: this.state.FilterYear,
      }).render()
    );

    const titleUpComing = new Typography({ variant: "h1", children: "Upcoming Movie" });
    this.homeContainer.appendChild(titleUpComing.render());

    this.homeContainer.appendChild(
      new MovieList({
        movieItems: this.state.movieList,
        loadMoreMovie: () => this.loadMoreMovie(),
        isLoading: this.state.isLoading,
      }).render()
    );

    return this.homeContainer;
  }
}

export default Homepage;
