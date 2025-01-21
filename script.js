// Back in the days, we develop the project by writing one large script or script in multiple files. But now, we develop project in terms of modules and these modules can share data between them and we make our code more maintainable and organized.
// One great thing about the module is that we can include third party module into our code and there are thousand of open source modules which are called packages that developer shares in npm repository. These packages are free to use.
// All of these packages are available through npm, because it was developed through npm and develop for npm.
// So to use these packages we need to install npm in our computer
// this is not the end of story when we are building real world application
// Instead our project goes through the build process where one final javascript bundle is built and that's the final file which we will deploy to our web server for application. this is the final file of production
// Production means the application is used by real user in the real world
// Build process can be complex but we will keep it simple and include only two steps
// (1): We will bundle our all module into one big file. We do bundling because it will avoid unused code and compress the code as well
// (2): But module is not executed by the old browsers so in next step we do TRANSPILING /POLyFILING which convert all the syntax back to the old ES5 syntax so even the older browsers can execute it and this thing is done using a tool called BABEL.
// we do not do these steps on our own but we use tool for this build process and most common tools are webpack and Parcels.
// these are called JS bundlers as they takes our raw code and convert into js bundles
// these development tools are also available in npm and like the package we add in our project, we will simply download and manage tools using npm 
