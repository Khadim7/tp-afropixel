// Une carte produit
export class CarteProduit {
  constructor(produit, quantite) {
    this.produit = produit;
    this.quantite = quantite; // combien de fois il est dans le panier
  }

  render() {
    const { id, nom, prix, url } = this.produit;

    // la pastille s'affiche seulement si le produit est dans le panier
    let pastille = "";
    if (this.quantite > 0) {
      pastille = `<span class="pastille">${this.quantite}</span>`;
    }

    return `
      <article class="card">
        ${pastille}
        <img src="${url}" alt="${nom}">
        <p class="nom">${nom}</p>
        <p class="prix">${prix} CFA</p>
        <div class="boutons">
          <button class="plus" data-id="${id}">+</button>
          <button class="moins" data-id="${id}">-</button>
        </div>
      </article>
    `;
  }
}