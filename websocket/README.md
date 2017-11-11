# WebSocket

- [Intro to WebSocket](#intro-to-websocket)
- WebSocket in the Browser
- Node Websocket

#### Intro to WebSocket
WebSocket is an Application layer protocol. WebSocket is similar to HTTP in that it is a TCP based protocol, and top layer protocols in the OSI stack. WebSocket is different in that it allows for a continous, full-duplex connection. That means that the connection may be kept open and used for 2-way communication, as opposed to HTTP's request-response architecture. This 2-way communcation is useful for building real time applications. WebSocket works well for applications like chat, messangers, notifications, and generally syncronizing data across devices, however since it is TCP based it is usually not a good choice for real time voice and data.

#### WebSocket in the Browser
WebSocket is a standard HTML5 feature and can be accessed with the `WebSocket` api. creating a new connection is as simple as creating a new WebSocket object and passing it the desired url.

```javascript
let socket = new WebSocket("ws://www.myserver.com/ws");
```
