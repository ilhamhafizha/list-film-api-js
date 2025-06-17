class Loader {
  loaderContainer: HTMLDivElement;
  constructor() {
    this.loaderContainer = document.createElement("div");
    this.loaderContainer.className = "loader-container";
  }

  render() {
    return this.loaderContainer;
  }
}

export default Loader;
