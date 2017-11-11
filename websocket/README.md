# WebSocket

- [Intro to WebSocket](#intro-to-websocket)
- [WebSocket in the Browser](#websocket-in-the-browser)
- [WebSocket in Node](#websocket-in-node)

#### Intro to WebSocket
WebSocket is an Application layer protocol. WebSocket is similar to HTTP in that it is a TCP based protocol, and top layer protocols in the OSI stack. WebSocket is different in that it allows for a continous, full-duplex connection. That means that the connection may be kept open and used for 2-way communication, as opposed to HTTP's request-response architecture. This 2-way communcation is useful for building real time applications. WebSocket works well for applications like chat, messangers, notifications, and generally syncronizing data across devices, however since it is TCP based it is usually not a good choice for real time voice and data.

#### WebSocket in the Browser
WebSocket is a standard HTML5 feature and can be accessed with the `WebSocket` api. creating a new connection is as simple as creating a new WebSocket object and passing it the desired url.

```javascript
let socket = new WebSocket("ws://www.myserver.com/ws");
```
Once the socket is connected, you need to setup event handlers to handle incoming data. Websocket has 4 main events. `onopen`, `onerror  `, `onmessage`, and `onclose`.

```javascript
socket.addEventListener('open', event => {
    // Socket now open
});
socket.addEventListener('message', event => {
    // Message recieved from server
    console.log(event.message);
});
socket.addEventListener('error', event => {
    console.log('Error occured ', event.data);
});
socket.addEventListener('close', event => {
    console.log('Closed with code', event.code);
});
```

Sending data is done with the `send` method. The `send` method will accept string data, ArrayBuffer, Blob, and ArrayBufferView.
```javascript
socket.send('hello');
```
Closing the connection can be done with the `close` method.
```javascript
socket.close();
```

#### WebSocket in Node
While running Node, the application can be a client, or a server. There is not a built in WebSocket api, but there are various third party modules that provide very good functionality. [WebSockets](https://github.com/websockets/ws) is very good library, and widely used.

Following example is from the WebSockets docs for creating a client side application. Note that the api is very similar, but the WebSocket object extends [EventEmmitter](https://nodejs.org/api/events.html) and uses the `on` method to attach callback functions.
```javascript
const WebSocket = require('ws');

const ws = new WebSocket('ws://www.host.com/path');
ws.on('open', () => {
  ws.send('something');
});
ws.on('message', data => {
  console.log(data);
});
```