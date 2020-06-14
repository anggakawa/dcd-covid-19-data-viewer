class Card extends HTMLElement {
  
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card has-text-centered">
        <div class="card-content">
          <div class="title">
            <p class="title is-size-4 has-text-black">${this.getAttribute("title")}</p>
          </div>
          <div class="content">
            <p class="is-size-1">${this.getAttribute("counts")}</p>
          </div>
        </div>
      </div>
    `;
  }

}

customElements.define("card-info", Card);

