import Homepage from "../components/pages/homepage/index.js";
import Detailpage from "../components/pages/detail/index.js";

const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(), // Placeholder for detail page
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = ""; // Clear previous content
  if (hash === "") {
    // home page
    appContainer.appendChild(ROUTES["home"]);
  } else if (hash === "detail") {
    // detail page
    appContainer.appendChild(ROUTES["detail"]);
  } else {
    // 404 page
    alert("404 Not Found");
  }
};
