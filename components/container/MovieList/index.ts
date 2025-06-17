import Button from "../../UI/button/index.js";
import Loader from "../../UI/loader/index.js";
import MovieItem from "../MovieItem/inde.js";
import MovieItemProps from "../MovieItem/item.type.js";
import MovieListProps from "./list.type.js";

class MovieList {
  movieItems: MovieItemProps[];
  loadMoreMovie: () => void;
  isLoading: boolean;
  movieContainer: HTMLDivElement;
  movieWrapper: HTMLDivElement;

  constructor(props: MovieListProps) {
    const { movieItems, loadMoreMovie, isLoading } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieWrapper = document.createElement("div");
    this.movieContainer.className = "movie-list";
    this.loadMoreMovie = loadMoreMovie;
    this.isLoading = isLoading;
  }

  render() {
    // Bersihkan isi sebelum render ulang
    this.movieWrapper.innerHTML = "";
    this.movieContainer.innerHTML = "";

    this.movieItems.map((movie) => {
      const movieTitle = new MovieItem(movie);

      this.movieContainer.appendChild(movieTitle.render());
    });

    this.movieWrapper.appendChild(this.movieContainer);

    let loadMoreBtn = null;
    if (this.movieItems.length > 0) {
      loadMoreBtn = new Button({
        text: this.isLoading ? "" : "Load More",
        variant: "primary",
        onclick: () => {
          this.loadMoreMovie();
        },
        className: "load-more",
        disabled: this.isLoading,
      }).render();

      this.movieWrapper.appendChild(loadMoreBtn);
    }

    if (this.isLoading && loadMoreBtn) {
      const loader = new Loader().render();
      loadMoreBtn.appendChild(loader);
    }

    return this.movieWrapper;
  }
}

export default MovieList;
