import { Panier } from "./Panier.js";

// L'entête : titres, panier et traits de séparation
export class Entete {
  constructor(titre, sousTitre) {
    this.titre = titre;
    this.sousTitre = sousTitre;
    this.panier = new Panier();
  }

  render() {
    return `
      ${this.panier.render()}
      <h1>${this.titre}</h1>
      <h2>${this.sousTitre}</h2>
      <hr>
      <hr>
    `;
  }
}