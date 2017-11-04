# Javascript Package Management
- Third party packages and Libraries
- NPM
- Creating a new package
- Installing and updating packages
- [Package Usage](#package-usage)
- Publishing an NPM package

#### Third party packages and Libraries
When building applications, it often makes sense to reuse code that has already solved a problem, or already offers a desired functionality. Instead of writing everything from scratch every time, it is possible to link your project to third party libraries. Linking your project may be done in many different ways, including downloading the code and adding it to your project. A better approach though, would be for these libraries to be hosted on a server, and then link your project using only a reference to where this code is located, that way it will save space in your repository, and allow easy updates of the library.

#### NPM
There are various package managers for Javascript, but NPM is the defacto package manager for Node. It comes bundled with Node.

#### Creating an NPM Package
Npm can be accessed using the command `npm`. To get started, you want to initialize your project directory with a package.json. This file contains all the data that npm uses to find and link packages.
```sh
npm init
```
Follow the instructions given at the prompts. For now, use all the defaults.

After the installation is complete, you should see a file that looks like this in your directory.
```json
{
  "name": "packaging",
  "version": "1.0.0",
  "description": "a sample project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
You can now enter in any fields you like. The complete docs for the package.json fields may be found [here](https://docs.npmjs.com/files/package.json).

#### Installing and updating packages
There are a few different ways of installing packages with npm. For the first demo we will use a popular date package called [moment](https://www.npmjs.com/package/moment).

Installing packages with npm via command line is very easy. Simply run the command `npm install` followed by the package name. There are a few flags to pay attention to though. Running `npm install` will download the latest version into a directory called `node_modules`. This directory should be excluded from you repository. So if another teamate updates their repository with your project, they will not have this package. Instead to save the link information to your package, use the `-S` or `-save` flag.
Your command will look something like this:
```sh
npm install moment -S
```
Npm packages may also be installed globally on your machine, meaning any other package you are working on can access it using the `-G` flag.

#### Package Usage
Unfortunatly, Node has not yet fully implemented the es6 package system yet, so there will be a slightly different way of including packages for Node vs front end, unless you use another plugin called a transpiler.

For importing packages in Node use the `require` function. It is always good practice to save the required package into a variable so it does not leak into the global scope. Once your package is required, you can call the api on it in your project.

```javascript
const moment = require('moment');
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
```