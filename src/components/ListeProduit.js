import { CarteProduit } from "./CarteProduit.js";

// La liste de tous les produits (assemble les cartes)
export class ListeProduit {
  constructor(produits) {
    this.cartes = produits.map((produit) => new CarteProduit(produit));
  }

  render() {
    return this.cartes.map((carte) => carte.render()).join("");
  }
}