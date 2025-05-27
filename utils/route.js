import Homepage from "../components/pages/homepage/index.js";
import Detailpage from "../components/pages/detail/index.js";

const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";
  const hashRoute = hash === "" ? "home" : hash;
  const isavailablePage = ROUTES.hasOwnProperty(hashRoute);
  if (isavailablePage) {
    appContainer.appendChild(ROUTES[hashRoute]);
  } else {
    alert("404 Not Found");
  }
};
