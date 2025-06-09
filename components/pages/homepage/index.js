import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import Footer from "../../container/Footer/index.js";
import MovieList from "../../container/MovieList/index.js";
import Navigation from "../../container/Navigation/index.js";
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
      movie: [],
      moviePage: 1,
      isLightMode: false,
    };
    this.homeContainer = document.createElement("div");
    this.init();
    window.addEventListener("hashchange", () => {
      if (window.location.hash.split('?')[0] === "") {
        this.init();
      }
    });

  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  init() {
    if (window.location.hash === "") {
      this.getDataMovie();
      this.render();
    }
  }

  getDataMovie(pageParam = 1, type = "get") {
    this.setState({ isLoading: true });
    const page = type === "get" ? 1 : pageParam;
    let urlPath = `titles/x/upcoming?limit=4&page=${page}&sort=year.decr`;

    if (this.state.FilterType !== "") {
      urlPath += `&titleType=${this.state.FilterType}`;
    } else if (this.state.FilterYear !== "") {
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

    // Movie of the year
    const pageMovie = type === "get" ? 1 : pageParam;
    let year = '2024';
    let urlPathMovie = `titles?limit=4&page=${pageMovie}&sort=year.decr&year=${year}`;
    if (this.state.FilterType !== "") {
      urlPathMovie += `&titleType=${this.state.FilterType}`;
    } else if (this.state.FilterYear !== "") {
      year += this.state.FilterYear;
    }

    fetchApi("GET", urlPathMovie)
      .then((data) => {
        if (type === "get") {
          this.setState({
            movie: data.results,
          });
        } else {
          this.setState({
            movie: [...this.state.movie, ...data.results],
          });
        }
      });
    this.setState({ isLoading: false });
  }
  loadMoreMovie(params) {
    this.setState({ isLoading: true });
    if (params === 'upcoming') {
      this.setState({ page: this.state.page + 1 });
      this.getDataMovie(this.state.page + 1, 'load');
    } else if (params) {
      this.setState({ moviePage: this.state.moviePage + 1 });
      this.getDataMovie(this.state.moviePage + 1, 'load');
    }
  }

  render() {
    this.homeContainer.innerHTML = "";
    this.homeContainer.className = this.state.isLightMode ? "home-container-light" : "home-container-dark";

    if (this.state.isLightMode) {
      document.body.style.backgroundColor = "#f0f0f0";
    } else {
      document.body.style.backgroundColor = "#0d1017"; // warna dark mode sesuai tema Anda
    }

    const navigation = new Navigation({
      setLightMode: (value) => this.setState({ isLightMode: value }),
      isLightMode: this.state.isLightMode
    });

    this.homeContainer.appendChild(navigation.render());

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
        loadMoreMovie: () => this.loadMoreMovie('upcoming'),
        isLoading: this.state.isLoading,
      }).render()
    );

    const titleThisYear = new Typography({ variant: "h1", children: "Movie Of Year " });
    this.homeContainer.appendChild(titleThisYear.render());
    this.homeContainer.appendChild(
      new MovieList({
        movieItems: this.state.movie,
        loadMoreMovie: () => this.loadMoreMovie('movie'),
        isLoading: this.state.isLoading,
      }).render()
    );
    this.homeContainer.appendChild(
      new Footer().render()
    );
    return this.homeContainer;
  }
}

export default Homepage;
