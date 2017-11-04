# Express Framework
- [Intro to Express](#intro-to-express)
- [Routing](#routing)
- [Middleware](#middleware)
- [Demo 1 Basic page](#demo-1-basic-page)
- [Demo 2 Building a rest api](#demo-2-building-a-rest-api)

#### Intro to Express
[Express](https://expressjs.com/) is a server-side framework built for node that allows you to easily create a server and handle requests. 

To get started, install the express framework.
```sh
$ npm install express --save
```

Once you have express installed, require it into your application. Create a new express instance.
```javascript
const express = require('express');
const app = express();
```
Next, you need to set up a basic route. The `get` function will connect an endpoint to a function. In this case the `/` will route all requests to this function. The function gets two arguments, `req`, and `res`. `res` contains a reference to the response object, and you can respond to the request using the `send` method. In this case, we will just repond with 'Hello World!';
```javascript
app.get('/', (req, res) => res.send('Hello World!'));
```

Finally, to get the app to actually run, use the `listen` method, by passing it in a port number, and optional callback for when the app is up and running.
```javascript
app.listen(portNumber, () => console.log(`helloworld running on port ${portNumber}`));
```
To run the application, call it by it's script name, and for our demo, pass it a port number.
```sh
$ node helloworld.js 3333
```
##### Full Script
```javascript
const express = require('express');
const app = express();

if(process.argv.length !== 3){
	console.log('Usage : helloworld.js <port numbber>');
	process.exit(1);
}

const portNumber = process.argv[2];
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(portNumber, () => console.log(`helloworld running on port ${portNumber}`));
````

#### Routing

#### Middleware

#### Demo 1 Basic page

#### Demo 2 Building a rest api
