class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <b>COVID 19 Stats</b>
          </a>
        </div>
      </nav>`;  
  }
}
customElements.define("app-bar", AppBar);
