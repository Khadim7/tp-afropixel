// Le panneau qui montre ce qu'il y a dans le panier
export class PanierDetails {
  constructor(produits, panier) {
    this.produits = produits;
    this.panier = panier;
  }

  render() {
    let lignes = "";
    let total = 0;

    for (const produit of this.produits) {
      const quantite = this.panier[produit.id];
      if (!quantite) continue; // pas dans le panier : on saute

      total += produit.prix * quantite;
      lignes += `
        <li class="ligne">
          <img src="${produit.url}" alt="${produit.nom}">
          <div>
            <p class="ligne-nom">${produit.nom}</p>
            <p>${produit.prix} CFA</p>
            <button class="plus" data-id="${produit.id}">+</button>
            <span class="qte">${quantite}</span>
            <button class="moins" data-id="${produit.id}">-</button>
          </div>
        </li>
      `;
    }

    let contenu = `<p class="vide">Votre panier est vide.</p>`;
    if (lignes !== "") {
      contenu = `
        <ul class="lignes">${lignes}</ul>
        <div class="panier-pied">
          <p>Total : <strong>${total} CFA</strong></p>
          <button class="vider">Vider le panier</button>
        </div>
      `;
    }

    return `
      <div class="overlay fermer"></div>
      <aside class="panier-panneau">
        <div class="panier-tete">
          <h3>Mon panier</h3>
          <button class="fermer">✕</button>
        </div>
        ${contenu}
      </aside>
    `;
  }
}