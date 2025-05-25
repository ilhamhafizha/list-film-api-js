import Button from "./components/button/index.js";
import ListComponent from "./components/list/index.js";
import { route } from "./utils/route.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttonProps = {
    text: "submit",
    variant: "primary",
    onclick: () => {
      console.log("Passed clicked");
    },
  };
  const button = new Button(buttonProps);
  const listComponent = new ListComponent({ items: ["item1", "item2", "item3", "item 4"] });

  document.body.appendChild(button.render());
  document.body.appendChild(listComponent.render());
  history.replaceState(null, null, "#");
});

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1);
  route(hash);
});
