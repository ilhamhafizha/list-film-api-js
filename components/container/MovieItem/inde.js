import ImageComponent from "../../UI/image/index.js";
import Typography from "../../UI/typography/index.js";

class MovieItem {
  constructor(props) {
    const { movie } = props;
    this.movie = movie;
    this.movieItemContainer = document.createElement("div");
    this.movieItemContainer.className = "movie-card";
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

    this.movieItemContainer.appendChild(
      new Typography({
        variant: "h4",
        children: this.movie.titleText?.text || "No Title Available",
      }).render()
    );
    this.movieItemContainer.appendChild(
      new Typography({
        variant: "h5",
        children: this.movie.releaseYear?.year || "No Title Available",
      }).render()
    );

    return this.movieItemContainer;
  }
}

export default MovieItem;
