import Typography from "../../UI/typography/index.js";
class notFound {
    constructor() {
        this.notFoundContainer = document.createElement("div");
        this.notFoundContainer.className = "not-found-container";
        this.init();
    }
    init() {
        this.render();
    }
    render() {
        this.notFoundContainer.innerHTML = ``;
        const title = new Typography({
            variant: "h1",
            className: "",
            children: "This Page Not Developed yet :(",
        });
        this.notFoundContainer.appendChild(title.render());
        return this.notFoundContainer;
    }
}
export default notFound;
