import ImageComponent from "../../UI/image/index.ts";
import Typography from "../../UI/typography/index.ts";
import MovieItemProps from "./item.type.ts";

class MovieItem {
  movie: MovieItemProps;
  movieItemContainer: HTMLDivElement;

  constructor(movie: MovieItemProps) {
    this.movie = movie;
    this.movieItemContainer = document.createElement("div");
    this.movieItemContainer.className = "movie-card";
    this.movieItemContainer.onclick = () => {
      window.location.hash = `detail?id=${this.movie.id}`;
    };
  }

  render() {
    const divImage = document.createElement("div");
    divImage.className = "image-container";
    divImage.appendChild(
      new ImageComponent({
        src: this.movie.primaryImage?.url,
        alt: this.movie.primaryImage?.caption.plainText || "Movie Image",
        className: "img-movie",
      }).render()
    );
    this.movieItemContainer.appendChild(divImage);

    const divInfo = document.createElement("div");
    divInfo.className = "info-container";
    this.movieItemContainer.appendChild(divInfo);

    divInfo.appendChild(
      new Typography({
        variant: "h4",
        className: "",
        children: this.movie.titleText?.text || "No Title Available",
      }).render()
    );
    divInfo.appendChild(
      new Typography({
        variant: "h5",
        className: "",
        children: this.movie.releaseYear?.year.toString() || "No Title Available",
      }).render()
    );

    return this.movieItemContainer;
  }
}

export default MovieItem;
