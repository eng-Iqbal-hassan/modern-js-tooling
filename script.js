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

// const shoppingCart = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart and shipping cost is ${shoppingCost}`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
// if we are not storing this function anywhere then it will disappear very soon so we are storing it in a variable.
// shoppingCart.addToCart('bread', 2);
// shoppingCart.addToCart('pizza', 2);
// console.log(shoppingCart);
// so the object which the function is returning is stored in the variable and then the stuff like mention above is done.
// the variable which is make private is not accessible like
// console.log(shoppingCart.shoppingCost); // its answer is undefine because this property is not added in the return statement
// further as the IIFE is run at very start then how it is possible the execution of all the stuff and the increment of object inside the cart array
// all this happen due to closure because closure allows a function to have the access of all the variables that were present at its birthplace.
// this cart is not the inside of addToCart function but this cart is the variable declared above so we addToCart have the access of all the variable of this IIFE function like inside function i have added shippingCost. This is showing in the result of addToCart function even we have not added this in return.

///////////////////////////////

// Lecture 8: Other module system
// there are other module system apart from native module and module pattern
// these modules are AMD modules and commonJs module which were used in past
// commonJs module are commonly used in node and still present with all of its existence.
// ES modules are commonly running in node.js and node.js is the way of running js on a web server outside the browser
// at start npm was for node only and then it became the standalone repository for the whole Js world so it is important to take a look on commonJs Module.
// the code for node with commonJs module will look like as i given below

// export
// export.addToCart = (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart and shipping cost is ${shoppingCost}`
//     );
//   };

// import
// const { addToCart } = require('./shoppingCart.js')
// this code will not run over there but it is the stuff of node. so these modules are present for js but this thing is in the node.
// in some time in future ES6 will replace the whole module system
// Rest of the section is about how to use third party package from npm.

///////////////////////////////

// Lecture 9: A brief introduction to command line
// in terminal we are always on the folder in which vs code is running.
// now we can make different commands to get different things
// like we do ls and then all the files and folder in this folder are shown
// cd is the command with which we can change the directory and we can move around. like cd .. we move up, so in the folder where this folder is created
// so by cd .. i have moved in the folder structure a step up and if i want to see its child again i press ls
// so if i want to move to any directory from here we simply write cd and then directory name
// clear is the command by which i can clear my terminal and i am at top level
// i can make new folder in my project by command line which is -> mkdir folder_name
// with cd test i have moved to that folder and now i can create files in this folder by touch
// arrow key up to see the previous commands and arrow key down to the next commands from a command
// we can add multiple files by just writing the names of the file by space in front of touch keyword
// i can remove one or multiple files at a time by rm keyword
// i can move the file from one folder to the other by mv -> like by mv bankist.js ../ command i have moved this file from test to parent folder
// so rmdir will delete the empty folder only
// mkdir for creating the folder and rmdir for deleting the folder.

///////////////////////////////

// Lecture 10: Introduction to npm
// npm is both a software on our computer and a package repository.
// Before the npm, we use to add script file of a package in our html page like we did in our mapty project for leaflet library.
// Why we need npm? The reasons are below
// (1): Firstly, it does not make sense that html is loading all the js that are really messy.
// (2): Sometime we download a library in our computer and then add its script in html, so if the new version then we have to download the new version and then change the name of the script. So it is tough to keep the track of updated packages
// (3): The third reason is that before npm we did not have any repository that includes all the packages that we might need
// so we need to manage our dependencies in better and modern way. so for this reason npm is necessary.
// so in order to use the npm, first check if it is installed or not by command npm -v
// if it returns some number then it is installed, if it gives some error then install node
// the provided npm version should ve greater than 6
// so to use npm, we need to initialize the npm in our project by command npm init
// it will ask some questions we just hit return saying that we are accepting the default answers, then at the end it will create the package.json file
// now we have added the leaflet in our project by npm
// so we run the command npm install leaflet
// so it gives us two things. First, in package.json file dependencies are added with with leaflet and second is that node_modules have the code of leaflet in it which contains everything about this library which can be used.
// And we keep downloading more modules their code will start adding in node modules.
// And if i wanted to use it, it will not be easy to use without module bundler, the reason is that library is using commonJs module
// we can not directly import it in our project and we can do it we use a module bundler. we are discussing how to do it now
// one of the install and import of library that we are going to do is the lodash.
// lodash is usually a collection of tons of functions for arrays, objects, functions, date and time.
// these functions could or should be added in lodash but they are not added and we are doing that here in lodash.
// we are installing the es version of this library and not the simple version so the package will be of es-version
// so in node module, inside lodash folder we get so many methods in files and for one method there is one file.
// now let say that we are adding clonedeep in here in our js
// as these js file are default export so we can import with any name and without curly braces but over here we are adding with the same name

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// why we have import cloneDeep
// the reason is that we have talk about when we were copying the nested object
// so it is hard to copy the nested object. So let say create one object

// import cloneDeep from 'lodash-es';
// in presence of parcel then instead of using the long path we have used just lodash-es and script will understand on its own what is the exact thing to add in the script

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
// so here the state is the object which contains nested objects.
// we copy the object before by using Object.assign method and the syntax be like
const stateClone = Object.assign({}, state);
console.log('clone with js', stateClone);
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
console.log('clone from lodash', stateDeepClone);
state.user.loggedIn = false;
// so it is observed that if any value in the state is changed then this value is also changed in its clone object.
// now consider do the same thing with the deepClone function that we have imported.
// it is being observed that clone from lodash contains loggedIn true
// but if we do lodash clone after the value is changed then loggedIn value in it will be false.
// but in js clone, loggedIn value will be false no matter it is clone before or after changing the value.
// so when we are copying our project to paste or add somewhere else or we are pushing our code to the git then there is no need to add or copy node_module folder because this code will come up from npm
// so if we have let say 20 dependencies, do we install one by one. The answer is no. we just add npm install without any package. Then it will look into package.json file and here look into the dependencies and will install all and add all the code stuff in node_module on its own in one go.

///////////////////////////////

// Lecture 11: Bundling with Parcel and NPM scripts
// we use parcel as module bundler in this course.
// Parcel is also just another tool which is also available in npm.
// so we will install parcel by npm. But it is a different dependency and we install it by the command npm i parcel --save-dev
// so this is dev dependency, and this is a kind of dependency which is required to built our application and not to add in our code.
// thats why this parcel appears in new field which is devDependencies.
// we can not get result of running command parcel index.html in terminal. The reason is that this package is basically installed locally
// There is also the global installation of parcel but we will discuss it later
// Basically when we are running command parcel index.html, then we want to bundle all the js present in the index.html
// so one of the way of running this command is to write the command like npx parcel index.html
// npx is an application built in the npm
// here index.html is the entry point of the parcel because there is script files added which we want to bundle up.
// Parcel then actually start a new development server
// so beside bundling its also provide server
// the only difference between servers coming from go-live and parcel server is that both are running on different ports and there is raw IP address in go-live server but in parcel server there is just name.
// other command to install parcel if there is the error is sudo npm i parcel
// if still error occurs, then you can install a specific version let say the version is 1.12.4, then the command line to install this version is npm i parcel@1.12.4
// there is some error occurs then you have to uninstall the parcel by npm uninstall parcel, then install the specific version.
// we have seen that this parcel creates the new folder dist over there which contains the html file in which a script file is added which is also in dist folder and this script is bundled script.
// The thing which is observed that whenever we reload the page, then server built again despite the changes are made or not. so the thing should be that page is reloaded, then the parcel server should built if the changes do occur otherwise not.
// we can add hot module reloading in our code that means that if we make change in any of the module then it will trigger the re-built.

if (module.hot) {
  module.hot.accept();
}
// this is the code which is understand by the parcel.
// we have shortened the lodash path and all this thing is understood because of parcel.
// this thing is doable for all kind of files even html, css or even the images.
// there was es-module added in my code and for parcel it was given the shortened path. This thing is suitable for es module and also for commonJs module like leaflet module.
// even if we write some import of a module which is not installed, then parcel will automatically installed it.
// we can also run npm script to run parcel. Basically in script we make a script which contains the code parcel index.html and then in command line we run npm run and then script name.
// when we are done with developing our project, then this is the time to build the final bundle which will eliminate all the dead code and all that stuff.
// this thing is happen by other parcel command which is in the script. parcel build index.html. This is by the name of build then the command to run is npm run build
// we can add parcel globally by the command npm i parcel -g and then it will be added globally and can be used in all directory and it will run by direct command line and we will not use any intermediate command like npm or npx.
// But it is preferred to install parcel locally so that one can use the updated version of the parcel.

///////////////////////////////

// Lecture 12: Configuring babel and poly-filling
// After activating bundling, we need to configure BABEL to transpile our modern code to ES5 code.
// Even after the long time of ES6, there are some user who has run the old browsers like window 7 or window XP and we have to keep in mind for all kind of user and still this concept of BABEL and module bundling are important.
// Parcel automatically use the BABEL to transpile their code and we just need to configure it just.
// Babel is a js compiler
// Babel works with plugin and presets.
// so in the documentation and in th plugin we come to know that we can transpile any single feature using plugin back to ES5 and remaining all other in ES6 like we are transpiling only arrow function back to ES5 but we are keeping let and const declaration as it is in ES6.
// so this thing does not make much sense and we transpile everything at the same time se we mainly focus on presets.
// so a preset is the bunch of plugin bundles together.
// and this preset will automatically choose which feature of js needs to compile
// Now let's write some code which are class field and see how this class fields are compiled.
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}
const jonas = new Person('Jonas');
//Before this class feature was not the part of babel plugin and we need to add this feature as the time before it was the part of experimental feature but now it is a babel feature and we need not to add it manually.
// ok there are the features which are converted from ES6 to ES5 but there are some new features like promises and some new array methods like find method there syntax has been changed according to ES5 like if they are written with arrow function, then in transpiled file they are written with regular functions but they are still promises and methods with exact name they are not transpiled in the way which we want so this thing is resolved using poly-filling.
// so we need to poly-fill the new features of js
// this thing is done by other library which is core-js
// this library is installed by using the command -> npm i core-js
// and then import it in the file be like
import 'core-js/stable';
// after poly-filling when we see the transpiled code they are still find method and promise synatx in the exact same way as it was before but the difference is that now it in array prototype, all new methods are added and a global variable with the name of promise is added
// It also has seen that the new methods which we are not using in our code, their declaration is added in the transpiled file.
// so if we do not want to add everything then we can add any one of the new feature if this thing is really matter
// like we want to add find method of array -> then the import will look like this:
// import 'core-js/stable/array/find';
// this will add find method only.
// the same thing can be done for the promise like this:
// import 'core-js/stable/promise';

// there is one feature which is not polyfilled in this way and we need to install one more package.
// this feature is asynchronous function and for it to be polyfilled we add the package which is regenerator-runtime by the command -> npm i regenerator-runtime and this thing is added in the code by using import like this
import 'regenerator-runtime/runtime';

///////////////////////////////

// Lecture 13: Review writing clean and modern js
// lets discuss about the best practices while writing the code
// (1): Readable code:
//  (a): Write the code which others can understand
//  (b): Write the code which you can understand after one year or after sometime.
//  (c): Avoid too 'clever' and overcomplicated solutions -> it will create confusion in your code
//  (d): Use descriptive variable name: WHAT THEY CONTAIN
//  (e): Use descriptive function name: WHAT THEY DO
// (2): General:
//  (a): Use DRY principle (refactor your code)
//  (b): Don't pollute global namespace, encapsulate instead.
//  (c): Don't use var , use const and if the variable needs to change then use let.
//  (d): Use strong type checks(===,!==)
// (3): Functions:
//  (a): Generally functions should do only one thing.
//  (b): Do not use parameters more than 3
//  (c): Return the same data type which is receiving
//  (d): Use default params whenever possible.
//  (e): Use arrow functions when they make code more readable.
// some people have different opinion. Some use arrow functions all the time and some never use them all. So we should be the intermediate chooser we should use the both when they are better to use. One best example of using arrow functions is to use them in call-back of array methods.
// (4): OOP
//  (a): Use ES6 classes
//  (b): Encapsulate data and do not mutate it outside
//  (c): Use chaining method
//  (d): Do not use arrow functions as method in in regular objects. Because by doing this thing you will not have the access of THIS keyword of object in the function. So never use arrow function as methods in object even if you are not using this keyword. Because when you will have the habit of using regular function then you will never hit any mistake.
// (5): Avoid nested code
//  (a): Use early returns (guard clauses)
//  (b): Use ternary(conditional) or logical operator instead of if
//  (c): Use multiple if instead of if/else-if
//  (d): Avoid for loops -> Use array methods instead.
//  (e): Avoid call-back asynchronous APIs -> Don't call api by then method -> it will give you the nested code
// (6): Asynchronous code
//  (a): Consume promises with async-await for best readability
//  (b): Whenever possible, run promises in parallel(Promise.all)
//  (c): Handle errors and promise rejections.git
///////////////////////////////
