// ---------- DONNÉES ----------
// Tableau des produits
const pictures = [
  { id: 1, nom: "Femme noire", prix: 25000, categorie: "art", url: "images/blackness.jpg" },
  { id: 2, nom: "Girls in Tech", prix: 18000, categorie: "technologie", url: "images/deux.jpg" },
  { id: 3, nom: "Femme musulmane", prix: 27500, categorie: "religion", url: "images/muslima.jpg" },
  { id: 4, nom: "Jigeen ci Tech", prix: 20000, categorie: "technologie", url: "images/trois.jpg" },
  { id: 5, nom: "Les gadgets high tech", prix: 19500, categorie: "technologie", url: "images/un.jpeg" },
  { id: 6, nom: "Centre de controle", prix: 12500, categorie: "papier peint", url: "images/wallpaper-1.jfif" },
  { id: 17, nom: "Dark Army", prix: 17000, categorie: "papier peint", url: "images/wallpaper-2.jpeg" },
  { id: 20, nom: "Champions d'Afrique", prix: 22000, categorie: "papier peint", url: "images/wallpaper-3.jpg" },
  { id: 21, nom: "Bureau Mac OS", prix: 12000, categorie: "papier peint", url: "images/wallpaper-4.png" },
  { id: 22, nom: "Bureau Mac OS bleu", prix: 12000, categorie: "papier peint", url: "images/wallpaper-5.jpg" },
  { id: 23, nom: "Logo Ubuntu", prix: 12000, categorie: "papier peint", url: "images/wallpaper-6.jpg" },
  { id: 24, nom: "Cyber Task Force", prix: 12000, categorie: "papier peint", url: "images/wallpaper-7.jpg" },
  { id: 25, nom: "Regard profond", prix: 17500, categorie: "papier peint", url: "images/wallpaper-8.jpg" },
  { id: 26, nom: "Administrateur", prix: 12000, categorie: "papier peint", url: "images/wallpaper-9.jpg" },
  { id: 7, nom: "Cybercriminalité", prix: 120012000, categorie: "papier peint", url: "images/wallpaper-10.jfif" }
];


// ---------- COMPOSANTS ----------

// Le panier
class Panier {
  render() {
    return `<img class="cart-logo" src="images/cart-logo.png" alt="Panier">`;
  }
}

// L'entête : titres, panier et traits de séparation
class Entete {
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

// Une carte produit (image, nom, prix, boutons)
class CarteProduit {
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

// La liste de tous les produits (assemble les cartes)
class ListeProduit {
  constructor(produits) {
    this.cartes = produits.map((produit) => new CarteProduit(produit));
  }

  render() {
    return this.cartes.map((carte) => carte.render()).join("");
  }
}

// ---------- APPLICATION ----------

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

new App(pictures).render();