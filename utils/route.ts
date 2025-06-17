import Homepage from "../components/pages/homepage/index.ts";
import Detailpage from "../components/pages/detail/index.ts";
import AboutPage from "../components/pages/about/index.ts";
import notFound from "../components/pages/notFound/index.ts";

const ROUTES: { [key: string]: HTMLElement } = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
  about: new AboutPage().render(),
  _404: new notFound().render(),
};

export const route = (hash: string) => {
  const appContainer = document.getElementById("app") as HTMLElement;
  appContainer.innerHTML = "";
  const hashRoute = hash === "" ? "home" : hash.split("?")[0];
  const isavailablePage = ROUTES.hasOwnProperty(hashRoute);
  if (isavailablePage) {
    appContainer.appendChild(ROUTES[hashRoute]);
  } else {
    appContainer.appendChild(ROUTES["_404"]);
  }
};
