import { fetchApi } from "../../../utils/fetchApi.js";
import Button from "../../UI/button/index.js";
import Typography from "../../UI/typography/index.js";
import Image from "../../UI/image/index.js";

class Detailpage {
  constructor() {
    this.state = {
      selectedItem: {},
      isLoading: true,
      movieRate: {}
    },
      this.detailContainer = document.createElement("div");
    this.init()
  }

  init() {
    this.getDetailMovie();
    this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDetailMovie() {
    const queryString = window.location.hash.split("=")[1];
    const urlPath = `titles/${queryString}`;
    fetchApi("GET", urlPath)
      .then((result) => {
        this.setState({
          selectedItem: result.results,
        })
      });

    const urlPathRating = `titles/${queryString}/ratings`;
    fetchApi("GET", urlPathRating)
      .then((result) => {
        this.setState({
          movieRate: result.results,
          isLoading: false,
        });
      });
    this.setState({ isLoading: false });
  }

  render() {
    this.detailContainer.innerHTML = "";
    const title = new Typography({ variant: "h1", children: "Detail page" });
    this.detailContainer.appendChild(title.render());
    // const detailButtonNavigate = new Button({
    //   text: "Go To detailPage",
    //   variant: "primary",
    //   onclick: () => {
    //     window.location.hash = "";
    //   },
    // });
    // this.detailContainer.appendChild(detailButtonNavigate.render());

    // Gunakan fallback objek kosong agar tidak error
    let selectedItem = this.state.selectedItem;
    let movieRate = this.state.movieRate;

    if (
      Object.keys(selectedItem).length > 0 &&
      Object.keys(movieRate).length > 0
    ) {
      this.detailContainer.appendChild(
        new Image({
          src: selectedItem.primaryImage?.url,
          alt: selectedItem.primaryImage.caption.plainText,
          className: "detail-image-cover",
        }).render()
      );

      const contentContainer = document.createElement("div");
      contentContainer.className = "content-container";
      contentContainer.appendChild(
        new Image({
          src: selectedItem.primaryImage?.url,
          alt: selectedItem.primaryImage.caption.plainText,
          className: "detail-image",
        }).render()
      );
      const contentDetail = document.createElement("div");
      contentDetail.className = "content-detail";
      contentDetail.appendChild(
        new Typography({
          variant: "h1",
          children: `Title : ${selectedItem.originalTitleText.text}`,
        }).render()
      );
      contentDetail.appendChild(
        new Typography({
          variant: "h2",
          children: `Release Year : ${selectedItem.releaseYear.year}`,
        }).render()
      );
      contentDetail.appendChild(
        new Typography({
          variant: "h2",
          children: `Rating: ${movieRate.averageRating}`,
        }).render()
      )
      contentDetail.appendChild(
        new Typography({
          variant: "h2",
          children: `Vooters Count: ${movieRate.numVotes} votes`,
        }).render()
      );
      contentContainer.appendChild(contentDetail);
      this.detailContainer.appendChild(contentContainer);
    }

    return this.detailContainer;
  }
}

export default Detailpage;
