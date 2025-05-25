export const route = (hash) => {
  if (hash === "") {
    // home page
    console.log("Home page");
  } else if (hash === "detail") {
    // detail page
    console.log("detail page");
  } else {
    // 404 page
    console.log("404 Not Found");
  }
};
