import Button from "../../UI/button/index.js";
import MovieItem from "../MovieItem/inde.js";

class MovieList {
  constructor(props) {
    const { movieItems, loadMoreMovie } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieWrapper = document.createElement("div");
    this.movieContainer.className = "movie-list";
    this.loadMoreMovie = loadMoreMovie;
  }

  render() {
    this.movieItems.map((movie) => {
      const movieTitle = new MovieItem({
        movie: movie,
      });

      this.movieContainer.appendChild(movieTitle.render());
    });

    this.movieWrapper.appendChild(this.movieContainer);
    this.movieWrapper.appendChild(
      new Button({
        text: "Load More",
        variant: "primary",
        onclick: () => {
          this.loadMoreMovie();
        },
        className: "load-more",
      }).render()
    );

    return this.movieWrapper;
  }
}

export default MovieList;
