export function getPrice(price){
    return Number(price.replace("$", "")) || 0;

}