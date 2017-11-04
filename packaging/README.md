# Javascript Package Management
- Third party packages and Libraries
- NPM
- Initializing a package


#### Third party packages and Libraries
When building applications, it often makes sense to reuse code that has already solved a problem, or already offers a desired functionality. Instead of writing everything from scratch every time, it is possible to link your project to third party libraries. Linking your project may be done in many different ways, including downloading the code and adding it to your project. A better approach though, would be for these libraries to be hosted on a server, and then link your project using only a reference to where this code is located, that way it will save space in your repository, and allow easy updates of the library.

#### NPM
There are various package managers for Javascript, but NPM is the defacto package manager for Node. It comes bundled with Node.

#### Initializing a package
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