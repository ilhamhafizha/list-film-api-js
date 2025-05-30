import Button from "../../UI/button/index.js";
import Select from "../../UI/select/index.js";

class FilterMovie {
  constructor(props) {
    const { submitFilter, isLoading } = props;
    this.filterContainer = document.createElement("div");
    this.submitFilter = submitFilter;
    this.isLoading = isLoading;
  }

  render() {
    this.filterContainer.className = "filter-container";
    const homeButtonSearch = new Button({
      text: "Search Movie",
      variant: "primary",
      disabled: this.isLoading,
      onclick: () => this.getDataMovie(),
    });

    this.filterContainer.appendChild(
      new Select({
        option: [{ value: "movie", text: "Movie" }, { value: "short", text: "Short" }, ,],
        selectedValue: "title",
        onChange: (value) => {
          console.log(value);
        },
        width: "100px",
      }).render()
    );

    this.filterContainer.appendChild(
      new Select({
        option: [
          { value: "2025", text: "2025" },
          { value: "2024", text: "2024" },
          { value: "2023", text: "2023" },
          { value: "2022", text: "2022" },
          { value: "2021", text: "2021" },
          { value: "2020", text: "2020" },
          { value: "2019", text: "2019" },
          ,
        ],
        selectedValue: "title",
        onChange: (value) => {
          console.log(value);
        },
        width: "200px",
      }).render()
    );

    this.filterContainer.appendChild(homeButtonSearch.render());
    return this.filterContainer;
  }
}

export default FilterMovie;
