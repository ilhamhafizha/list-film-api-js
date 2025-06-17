import Button from "../../UI/button/index.js";
import Select from "../../UI/select/index.js";
import FilterProps from "./filter.type.js";

class FilterMovie {
  filterContainer: HTMLDivElement;
  submitFilter: () => void;
  isLoading: boolean;
  setType: (value: string) => void;
  setYear: (value: string) => void;
  type: string;
  year: string;

  constructor(props: FilterProps) {
    const { submitFilter, isLoading, setType, setYear, type, year } = props;
    this.filterContainer = document.createElement("div");
    this.submitFilter = submitFilter;
    this.isLoading = isLoading;
    this.setType = setType;
    this.setYear = setYear;
    this.type = type;
    this.year = year;
  }

  render() {
    this.filterContainer.className = "filter-container";
    const homeButtonSearch = new Button({
      text: "Search Movie",
      variant: "primary",
      disabled: this.isLoading,
      onclick: () => this.submitFilter(),
    });

    this.filterContainer.appendChild(
      new Select({
        options: [
          { value: "0", text: "Select Type" },
          { value: "movie", text: "Movie" },
          { value: "short", text: "Short" },
        ],
        selectedValue: this.type,
        onChange: (value) => {
          this.setType(value);
        },
        width: "140px",
      }).render()
    );

    this.filterContainer.appendChild(
      new Select({
        options: [
          { value: "0", text: "Select Year" },
          { value: "2025", text: "2025" },
          { value: "2024", text: "2024" },
          { value: "2023", text: "2023" },
          { value: "2022", text: "2022" },
          { value: "2021", text: "2021" },
          { value: "2020", text: "2020" },
          { value: "2019", text: "2019" },
        ],
        selectedValue: this.year,
        onChange: (value) => {
          this.setYear(value);
        },
        width: "200px",
      }).render()
    );

    this.filterContainer.appendChild(homeButtonSearch.render());
    return this.filterContainer;
  }
}

export default FilterMovie;
