// when we have to export only one value then we will use default export
const cart = [];
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
