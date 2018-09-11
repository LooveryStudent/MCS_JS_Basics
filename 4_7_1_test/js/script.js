let haveEnough = (haveMoney, apples, breads, priceApple, priceBread) => {
    return haveMoney > (priceApple * apples + priceBread * breads) ? "Вам хватает денег на покупки" : "Вам не хватает денег"
};