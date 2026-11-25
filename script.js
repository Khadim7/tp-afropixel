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

// Récupération des éléments du HTML
const header = document.querySelector("header");
const main = document.querySelector("main");

//  HEADER 
header.innerHTML = `
  <img class="cart-logo" src="images/cart-logo.png" alt="Panier">
  <h1>AFRO PIXEL</h1>
  <h2>LA RÉFÉRENCE DANS LA VENTE D'IMAGES DE QUALITÉ</h2>
  <hr>
  <hr>
`;

//  MAIN : cartes produits 
let cartes = "";

for (const produit of pictures) {
  cartes += `
    <article class="card">
      <img src="${produit.url}" alt="${produit.nom}">
      <p class="nom">${produit.nom}</p>
      <p class="prix">${produit.prix} CFA</p>
      <div class="boutons">
        <button>+</button>
        <button>-</button>
      </div>
    </article>
  `;
}

main.innerHTML = cartes;