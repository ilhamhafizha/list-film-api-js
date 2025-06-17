class Button {
    constructor(props) {
        const { text, variant, onclick, disabled, className } = props;
        this.handleClick = this.handleClick.bind(this);
        this.variant = variant;
        this.text = text;
        this.onclick = onclick;
        this.disabled = disabled;
        this.className = className;
    }
    handleClick() {
        if (this.onclick) {
            this.onclick();
        }
        else {
            console.log("Button clicked");
        }
    }
    render() {
        const button = document.createElement("button");
        if (typeof this.text === "string") {
            button.innerHTML = this.text;
        }
        else if (this.text instanceof HTMLElement) {
            button.appendChild(this.text);
        }
        button.className = `btn btn-${this.variant} ${this.className}`;
        button.disabled = this.disabled ?? false;
        button.addEventListener("click", this.handleClick.bind(this));
        return button;
    }
}
export default Button;
