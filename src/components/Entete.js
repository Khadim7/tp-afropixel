// L'entête : titres, icône du panier (avec le nombre d'articles) et traits
export class Entete {
  constructor(nombreArticles) {
    this.nombreArticles = nombreArticles;
  }

  render() {
    // le badge rouge s'affiche seulement s'il y a des articles
    let badge = "";
    if (this.nombreArticles > 0) {
      badge = `<span class="badge">${this.nombreArticles}</span>`;
    }

    return `
      <button class="panier-btn">
        <img class="cart-logo" src="images/cart-logo.png" alt="Panier">
        ${badge}
      </button>
      <h1>AFRO PIXEL</h1>
      <h2>LA RÉFÉRENCE DANS LA VENTE D'IMAGES DE QUALITÉ</h2>
      <hr>
      <hr>
    `;
  }
}