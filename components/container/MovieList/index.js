import Button from "../../UI/button/index.js";
import Loader from "../../UI/loader/index.js";
import MovieItem from "../MovieItem/inde.js";

class MovieList {
  constructor(props) {
    const { movieItems, loadMoreMovie, isLoading } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieWrapper = document.createElement("div");
    this.movieContainer.className = "movie-list";
    this.loadMoreMovie = loadMoreMovie;
    this.isLoading = isLoading;
  }

  render() {
    this.movieItems.map((movie) => {
      const movieTitle = new MovieItem({
        movie: movie,
      });

      this.movieContainer.appendChild(movieTitle.render());
    });

    this.movieWrapper.appendChild(this.movieContainer);
    if (this.movieItems.length > 0) {
      this.movieWrapper.appendChild(
        new Button({
          text: this.isLoading ? "" : "Load More", // Kosongkan teks jika sedang loading
          variant: "primary",
          onclick: () => {
            this.loadMoreMovie();
          },
          className: "load-more",
          disabled: this.isLoading,
        }).render()
      );
    }

    if (this.isLoading) {
      const loader = new Loader().render();
      this.movieWrapper.querySelector(".load-more").appendChild(loader);
    }

    return this.movieWrapper;
  }
}

export default MovieList;
