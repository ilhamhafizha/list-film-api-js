import ListProps from "./list.type";

class ListComponent {
  listItems: string[];
  constructor(props: ListProps) {
    const { items } = props;
    this.listItems = items;
  }

  render() {
    const ul = document.createElement("ul");
    this.listItems.map((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      ul.appendChild(li);
    });
    return ul;
  }
}

export default ListComponent;
