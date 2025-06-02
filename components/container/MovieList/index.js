import MovieItem from "../MovieItem/inde.js";

class MovieList {
  constructor(props) {
    const { movieItems } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieContainer.className = "movie-list";
  }

  render() {
    this.movieItems.map((movie) => {
      const movieTitle = new MovieItem({
        movie: movie,
      });

      this.movieContainer.appendChild(movieTitle.render());
    });

    return this.movieContainer;
  }
}

export default MovieList;
