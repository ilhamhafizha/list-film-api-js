import { route } from "./utils/route.js";

const handleHash = () => {
  const hash = window.location.hash.substring(1);
  route(hash);
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "") {
    history.replaceState(null, "", "#");
  }
  handleHash();
});

window.addEventListener("hashchange", handleHash);
