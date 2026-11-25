import { pictures } from "./data/pictures.js";
import { Entete } from "./components/Entete.js";
import { ListeProduit } from "./components/ListeProduit.js";
import { PanierDetails } from "./components/PanierDetails.js";

class App {
  constructor(produits) {
    this.produits = produits;
    this.header = document.querySelector("header");
    this.main = document.querySelector("main");

    // Le panier : un objet { idDuProduit: quantité }
    // exemple : { 1: 2, 4: 1 } = 2 fois le produit 1 et 1 fois le produit 4
    this.panier = {};
    this.panierOuvert = false;
  }

  // ----- Actions -----
  ajouter(id) {
    this.panier[id] = (this.panier[id] || 0) + 1;
    this.render();
  }

  retirer(id) {
    if (!this.panier[id]) return;
    this.panier[id] = this.panier[id] - 1;
    if (this.panier[id] === 0) delete this.panier[id];
    this.render();
  }

  vider() {
    this.panier = {};
    this.render();
  }

  ouvrirPanier() {
    this.panierOuvert = true;
    this.render();
  }

  fermerPanier() {
    this.panierOuvert = false;
    this.render();
  }

  // ----- Affichage -----
  nombreArticles() {
    let somme = 0;
    for (const id in this.panier) somme += this.panier[id];
    return somme;
  }

  render() {
    const entete = new Entete(this.nombreArticles());
    const liste = new ListeProduit(this.produits, this.panier);

    this.header.innerHTML = entete.render();
    if (this.panierOuvert) {
      this.header.innerHTML += new PanierDetails(this.produits, this.panier).render();
    }
    this.main.innerHTML = liste.render();

    this.activerBoutons();
  }

  // Après chaque affichage, on relie les boutons à leurs actions
  activerBoutons() {
    for (const bouton of document.querySelectorAll(".plus")) {
      bouton.onclick = () => this.ajouter(Number(bouton.dataset.id));
    }
    for (const bouton of document.querySelectorAll(".moins")) {
      bouton.onclick = () => this.retirer(Number(bouton.dataset.id));
    }
    for (const bouton of document.querySelectorAll(".fermer")) {
      bouton.onclick = () => this.fermerPanier();
    }

    document.querySelector(".panier-btn").onclick = () => this.ouvrirPanier();

    const boutonVider = document.querySelector(".vider");
    if (boutonVider) boutonVider.onclick = () => this.vider();
  }
}

// Point d'entrée
new App(pictures).render();