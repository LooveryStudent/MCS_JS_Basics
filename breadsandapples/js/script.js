const userHaveMoney = +prompt("Сколько у Вас с собой денег?");
const userBuyApples = +prompt("Сколько Вы купили яблок?");
const userBuyBreads = +prompt("Сколько Вы купили батонов хлеба?");
const priceApples = +prompt("Сколько стоит одно яблоко?") * userBuyApples;
const priceBreads = +prompt("Сколько стоит один батон хлеба?") * userBuyBreads;
const userEnoughMoney = userHaveMoney > (priceApples + priceBreads);
document.body.textContent = String(userEnoughMoney);