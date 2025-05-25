import Button from "./components/button/index.js";
import ListComponent from "./components/list/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = new Button();
  const listComponent = new ListComponent();

  document.body.appendChild(button.render());
  document.body.appendChild(listComponent.render());
});
