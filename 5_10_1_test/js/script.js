let crypto = [
    {
        name : "Bitcoin",
        price: 1388.37
    },
    {
        name : "Ethereum",
        price: 716
    },
    {
        name : "Litecoin",
        price: 140
    }
];

const app = document.getElementById("app");
function createCryptoBlock(name, price) {
   const hTitle = document.createElement("h2");
   hTitle.textContent = name;

   const pPrice = document.createElement("p");
   pPrice.textContent = price;

   const dColorLine = document.createElement("div");
   dColorLine.className = "color-line "+name.toLowerCase();
   dColorLine.style.width = price + "px";

   const dCrypto = document.createElement("div");
   dCrypto.appendChild(hTitle);
   dCrypto.appendChild(pPrice);
   dCrypto.appendChild(dColorLine);

   return dCrypto;
}

crypto.sort().forEach(item => {
    app.appendChild(createCryptoBlock(item.name, item.price));
});