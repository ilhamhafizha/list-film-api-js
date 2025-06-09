import Homepage from "../components/pages/homepage/index.js";
import Detailpage from "../components/pages/detail/index.js";
import AboutPage from "../components/pages/about/index.js";

const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
  about: new AboutPage().render(),
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";
  const hashRoute = hash === "" ? "home" : hash.split("?")[0];
  const isavailablePage = ROUTES.hasOwnProperty(hashRoute);
  if (isavailablePage) {
    appContainer.appendChild(ROUTES[hashRoute]);
  } else {
    alert("404 Not Found");
  }
};
