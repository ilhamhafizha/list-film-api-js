import Homepage from "../components/pages/homepage/index.js";
import Detailpage from "../components/pages/detail/index.js";

const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";
  if (hash === "") {
    appContainer.appendChild(ROUTES["home"]);
  } else if (hash === "detail") {
    appContainer.appendChild(ROUTES["detail"]);
  } else {
    alert("404 Not Found");
  }
};
