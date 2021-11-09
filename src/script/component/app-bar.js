class AppBar extends HTMLElement {
    connectedCallback() {
        this.render()

    }
    render() {
        this.innerHTML = `<h2>Club Finder</h2>
        <style>
            app-bar {
                display: block;
                padding: 16px;
                width: 100%;
                background-color: cornflowerblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
        </style>
        `;
    }
}
customElements.define("app-bar", AppBar);
export default AppBar