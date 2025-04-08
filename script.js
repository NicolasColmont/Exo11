const produits = [
    {
        id: "f2c97c26-a663-4a1d-987d-b36b3a3c7a31",
        name: "Clavier mécanique rétroéclairé",
        price: 218.26
    },
    {
        id: "18adfba3-21d8-45bf-98d2-00971485e4cd",
        name: "Écouteurs sans fil",
        price: 264.53
    },
    {
        id: "1ca4f227-db8f-4ca9-ba0f-4e670d8a2bbc",
        name: "Chaise ergonomique de bureau",
        price: 275.55
    },
    {
        id: "d5b6c59c-25dd-4631-9760-9742077ce128",
        name: "Lampe LED intelligente",
        price: 124.73
    },
    {
        id: "6c3ffb42-cd14-4478-92f6-f079f607132b",
        name: "Chargeur sans fil rapide",
        price: 159.50
    },
    {
        id: "efdf3e0f-7b87-4b6a-bc5b-89d9a2fbe872",
        name: "Sac à dos antivol",
        price: 89.15
    },
    {
        id: "c4c3db8e-5ff1-4f7f-9995-70e749593ed2",
        name: "Montre connectée fitness",
        price: 242.40
    },
    {
        id: "84419e76-f5c5-47b2-8a77-8e2cfef5d7f1",
        name: "Tapis de souris XXL",
        price: 45.67
    },
    {
        id: "3efc1298-f84c-48e5-91e6-15288f93ff03",
        name: "Hub USB-C multifonction",
        price: 72.80
    },
    {
        id: "b84f99c0-1b69-4e12-a0e8-b2281c5a861e",
        name: "Disque dur externe 2To",
        price: 199.99
    }
];

produits.forEach(element => {
    element.Image = "images/clavier-mecanique-sans-fil-azerty-spirit-of-gamer-xpert-k200-bluetooth-noir.jpg"
});

const productsContainer = document.createElement('div');
productsContainer.className = 'products-grid';

let PanierNbr = 0;

const FichePanier = document.createElement ('div')
FichePanier.className = 'fiche-panier'
FichePanier.innerHTML = `
    <img src="images/126083.png" alt="Logo de panier">
    <p id="panier-compteur">Vous avez 0 objets dans votre panier</p>
`

function incrementPanier() {
    const compteurElement = document.getElementById('panier-compteur');
    if (compteurElement) {
        compteurElement.innerHTML= `<span>Vous avez ${PanierNbr} objets dans votre panier</span>
        <button class="boutonreset">Vider votre panier</bouton>`;
    }
}

document.body.appendChild(FichePanier)


produits.forEach((produit) => {
    const FicheProduit = document.createElement('div');
    FicheProduit.className = 'fiche'
    FicheProduit.innerHTML = `  
            <p>${produit.name}</p>
            <img src=${produit.Image} alt="Placeholder">
            <p>${produit.price} €</p>
            <button class="boutonachat">Ajouter au panier</button>`;
    
    const boutonachat = FicheProduit.querySelector('.boutonachat')
    boutonachat.addEventListener("click", function(){ PanierNbr++;
        console.log('Added:', produit.name);
        incrementPanier();        
    })

    productsContainer.appendChild(FicheProduit)})

document.body.appendChild(productsContainer)

