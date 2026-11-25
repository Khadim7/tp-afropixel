import { CarteProduit } from "./CarteProduit.js";

// La liste de toutes les cartes produits
export class ListeProduit {
  constructor(produits, panier) {
    this.produits = produits;
    this.panier = panier;
  }

  render() {
    let html = "";
    for (const produit of this.produits) {
      const quantite = this.panier[produit.id] || 0;
      html += new CarteProduit(produit, quantite).render();
    }
    return html;
  }
}