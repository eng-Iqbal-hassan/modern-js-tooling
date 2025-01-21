// Exporting module
console.log('exporting module')

// lets define some variable

const shippingCost = 10;
export const cart= [];
// all the variables declared over there have scope only in this file and unlike normal scripts they can not access directly into other file.
// so if we want to export these variables into other file we simple need to export them
// export is of two types : named export and default export

export const addToCart = function(product,quantity) {
    cart.push({product,quantity});
    console.log(`${quantity} ${product} added to cart`)
}

// so this function we want to export over there so we will import it in some other file. we will simply add export keyword in front of this function. This is named export and we will have to import it with the same name in other file.

// we can export multiple things in a single go with named export like given below

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq}
