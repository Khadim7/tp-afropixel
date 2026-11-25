// Une carte produit (image, nom, prix, boutons)
export class CarteProduit {
  constructor(produit) {
    this.produit = produit;
  }

  render() {
    const { nom, prix, url } = this.produit;
    return `
      <article class="card">
        <img src="${url}" alt="${nom}">
        <p class="nom">${nom}</p>
        <p class="prix">${prix} CFA</p>
        <div class="boutons">
          <button>+</button>
          <button>-</button>
        </div>
      </article>
    `;
  }
}