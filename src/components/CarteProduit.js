// Une carte produit (image, nom, prix, boutons)
export class CarteProduit {
  constructor({ nom, prix, url }) {
    this.nom = nom;
    this.prix = prix;
    this.url = url
  }

  render() {
    return `
      <article class="card">
        <img src="${this.url}" alt="${this.nom}">
        <p class="nom">${this.nom}</p>
        <p class="prix">${this.prix} CFA</p>
        <div class="boutons">
          <button>+</button>
          <button>-</button>
        </div>
      </article>
    `;
  }
}