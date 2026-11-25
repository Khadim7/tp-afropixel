import { pictures } from "./data/pictures.js";
import { Entete } from "./components/Entete.js";
import { ListeProduit } from "./components/ListeProduit.js";

// Classe principale : relie les composants aux éléments du HTML
class App {
  constructor(produits) {
    this.header = document.querySelector("header");
    this.main = document.querySelector("main");

    this.entete = new Entete(
      "AFRO PIXEL",
      "LA RÉFÉRENCE DANS LA VENTE D'IMAGES DE QUALITÉ"
    );
    this.liste = new ListeProduit(produits);
  }

  render() {
    this.header.innerHTML = this.entete.render();
    this.main.innerHTML = this.liste.render();
  }
}

// Point d'entrée de l'application
new App(pictures).render();