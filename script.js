// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// we can import all the variable in a single go by the following syntax
// import * as shoppingCart from './shoppingCart.js'
// in this syntax, the object with name shoppingCart is created which contains all the variables of the imported file
// import add from './shoppingCart2.js'
// this is default export and we can export it by any name and it is without curly braces

// Lecture 3: 

// Back in the days, we develop the project by writing one large script or script in multiple files. But now, we develop project in terms of modules and these modules can share data between them and we make our code more maintainable and organized.
// One great thing about the module is that we can include third party module into our code and there are thousand of open source modules which are called packages that developer shares in npm repository. These packages are free to use.
// All of these packages are available through npm, because it was developed through npm and develop for npm.
// So to use these packages we need to install npm in our computer
// this is not the end of story when we are building real world application
// Instead our project goes through the build process where one final javascript bundle is built and that's the final file which we will deploy to our web server for application. this is the final file of production
// Production means the application is used by real user in the real world
// Build process can be complex but we will keep it simple and include only two steps
// (1): We will bundle our all module into one big file. We do bundling because it will avoid unused code and compress the code as well
// (2): But module is not executed by the old browsers so in next step we do TRANSPILING /POLYFILING which convert all the syntax back to the old ES5 syntax so even the older browsers can execute it and this thing is done using a tool called BABEL.
// we do not do these steps on our own but we use tool for this build process and most common tools are webpack and Parcels.
// these are called JS bundlers as they takes our raw code and convert into js bundles
// these development tools are also available in npm and like the package we add in our project, we will simply download and manage tools using npm 

///////////////////////////////

// Lecture 4: An overview of module in Js.
// module is a reusable piece of code that encapsulate implementation detail of certain part of our project
// this thing is looking like class or function but the difference is that module is a stand alone file most of the time. Module contains imports and exports.
// so from export we can export anything of the module (a single value or a function) and whatever we export is called public API.
// this public API is consumed in other module by importing its value.
// the module from where the value is importing is called the dependency of the importing module.
// modules are pattern which developer used in all programming languages from decades.
// We can write our code with module but this thing is good for simple application.
// if the application grows bigger and bigger then the usage of module becomes advantageous.
// Because we can think the modules are the building blocks of complex and largely growing applications
// the advantages can be as follows
// (1): modules provides easiness to compose software. Modules are small building blocks that we put together tio built large application
// (2): Isolated components: Modules can be developed in isolation without thinking about the whole application. So, one engineer can work on one module without having the knowledge of other module or even the entire application.
// (3): Abstract code: Implement low level code in module and then import these abstraction in other modules. For example in a module where we are making a form page where we have to apply the implementation of OTP. this page contains all other stuff with buttons etc. but the UI and functionality of OTP is coming from some other module (component). So, in it one can use the OTP without knowing how OTP is working behind the scene.
// (4): Organized code: When we break our code into small module then it already lead to a clean and organized codebase.
// (5): Reuse code: Module allow us to use the same code even across multiple projects.

// Javascript ES6 Modules: Modules store in file, exactly one module per file.
// Script is also a file. So what is the difference between ES6 Modules and Js files
// One difference is that top-level variables are scoped to module and one can access these variables only by importing them in other modules but on the other hand in scripts top-level variables are global scope and this thing can arise problem like global namespace pollution when developers try to declare different values by same variable name 
// default mode of the module is 'script mode' while default mode for script is 'sloppy mode'
// top level this keyword is undefine in module but in script file it points to the window.
// in modules we can import and export values but in script files we can not do this thing.
// imports and exports are done at the very top level and not inside of any block like if block
// imports are hoisted. No matter at what point you are importing the value it moves to the top level of the code.
// in HTML linking the module are exported with the syntax like <script type='module' /> while the simple script syntax is <script />
// file downloading in module is in asynchronous way while in case of the script the code is executed in more synchronous way because the code is directly written which in the module case we are importing.
// How modules actually import the other modules behind the scene.
// let say we are importing the rent value from dumb.js module.
// So as always when a piece of code is executed the first step is the parsing the code.
// Parsing means just read the code before executing it and this is the point where whole process of importing the value happens in an asynchronous way before main code execution. 
// so if we import the value inside a function then function needs to be execute first before importing the value so this importing or exporting will not happen in an asynchronous way.
// As these modules are imported in module say in index.js so at first these modules are downloaded in this module.
// when these modules are downloaded then these modules are linked to their exports file. 
// then the code of these files is executed. and so the process of importing the module is finished 

///////////////////////////////

// Lecture 5: Exporting and importing in ES6
// console.log('importing module')
// import './shoppingCart.js'; // this is the import of the module
// import { addToCart } from "./shoppingCart.js"; // this is the import of variable from module
// the error i face that we can not use the import statement outside the module 
// so to achieve this thing we use type=module where the script is achieved in html
// it has been observed that module code is run before any other code.
// import code is executed first even i have written it after.
// console.log(shippingCost);
// uncaught reference error: variable is not defined
// this variable is declared in other module so it has scope to that file only. and the error occur because this thing is not imported over there.
// addToCart('bread',5);
// console.log(`total price is ${price} and total quantity is ${tq}`)
// we can change the name of variable imported from other file as mentioned above. even this thing can be done in exported file.
// shoppingCart.addToCart('bread',5);
// console.log(shoppingCart.totalPrice);
// console.log('cart',shoppingCart.cart) // we have exported cart where it is just an empty array if the export is just the copy of import then in the console there is only the empty array but now it is giving me one object with product bread and quantity 5 properties.

// add('garlic',10) // this result coming from default export.
// imports are not the copy of export but it is the live connection with export file

///////////////////////////////

// lecture 6: Top level awaits
// in ES2020 -> there is the change that we can use await keyword outside the async function at least in modules. This await is called top level await.
// usage of await is like this with an api call
// lets consider the api from json placeholder which is about the post.
// console.log('start fetching data')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data) 
// console.log('end fetching data') 
// but here the await will block the execution context till the data is fetched and when the data is fetched.

// Lets consider the a kind of real world looking implementation using this await.
// consider the async function which returns an object containing the data of last post.
// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data) 
//     return { title: data.at(-1).title, text: data.at(-1).text}
// }
// const lastPost = getLastPost()
// console.log(lastPost); // but here instead of last value the async function will return the promise.

// so to get the value out of it we will use the then method
// lastPost.then(last=>console.log(last))
// Now this thing has returned the last post in the object but it is not the cleaner. The more cleaner way is to use await over there

// const lastPost2 = await getLastPost();
// console.log(lastPost2) // this variable contain the object with last post

// if we are importing a module which has type level await then this module will block the execution of the module in which it is importing.

// so top level await is useful but it should be use with great care 

///////////////////////////////

// Lecture 7: Modules pattern
// now we will see how use the module pattern
// the main goal of module pattern is to encapsulate functionality to have private data and to expose to a public API.
// And the best of achieving that is to use functions because function gives us the private data by default and allows us to return the values and it will become our public API.
// so lets make the IIFE, which will immidiatly be called when the page is loaded. The only purpose to make this function is to create a scope and return data just once.

const shoppingCart = (function(){
    const cart = [];
    const shoppingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    const addToCart = function(product,quantity) {
        cart.push({product,quantity});
        console.log(`${quantity} ${product} added to cart and shipping cost is ${shoppingCost}`)
    }
    const orderStock = function(product,quantity) {
        cart.push({product,quantity});
        console.log(`${quantity} ${product} ordered from supplier`)
    }
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})()
// if we are not storing this function anywhere then it will disappear very soon so we are storing it in a variable.
shoppingCart.addToCart('bread',2);
shoppingCart.addToCart('pizza',2);
console.log(shoppingCart);
// so the object which the function is returning is stored in the variable and then the stuff like mention above is done.
// the variable which is make private is not accessible like
console.log(shoppingCart.shoppingCost) // its answer is undefine because this property is nit added in the return statement
// further as the IIFE is run at very start then how it is possible the execution of all the stuff and the increment of object inside the cart array
// all this happen due to closure because closure allows a function to have the access of all the variables that were present at its birthplace.
// this cart is not the inside of addToCart function but this cart is the variable declared above so we addToCart have the access of all the variable of this IIFE function like inside function i have added shippingCost. This is showing in the result of addToCart function even we have not added this in return. 

///////////////////////////////
