const express = require('express');
const app = express();

if(process.argv.length !== 3){
	console.log('Usage : helloworld.js <port numbber>');
	process.exit(1);
}

const portNumber = process.argv[2];
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(portNumber, () => console.log(`helloworld running on port ${portNumber}`));