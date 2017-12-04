# Parallel JavaScript

- [Introduction to Parallel JavaScript](#introduction-to-parallel-javascript)
- [WebWorkers](#webworkers)
- [ChildProcesses]

#### Introduction to Parallel JavaScript
JavaScript is an intrinsically single threaded language. JavaScript does not directly offer multithreading to the programmer, instead, parallel JavaScript is achieved through child processes. The API for web Js vs Node differs for spawning child processes.

For web based JavaScript, sub processes are acheived via the [WebWorkers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) API. In Node, child processes may be spawned with the [child_process](https://nodejs.org/api/child_process.html) module.

#### WebWorkers
The WebWorker API offers a few different types of worker interfaces for spawning new workers. Workers run in the background and are like sub processes. 

##### Worker
The [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) interface creates a new background task with a specified js file. The basic method of communication with a WebWorker is message passing. In a message passing architecture, processes communicate by packaging all communication data into a single message, because variables cannot be shared (There is however a shared array buffer currently available in a few tech previews). Communication between workers is primaraly done with the `postMessage` method, and `onMessage` EventListener.

Creating a Worker is done with with the `Worker` constructor. The constructor takes one argument, which is the path to the script which will contain the worker logic. The worker also runs continuously like the main thread and waits for messages.

```javascript
const worker = new Worker('worker.js');

worker.onmessage = message => {
    console.log(message);
};
```

in the worker thread:
```javascript
onmessage = message => {
  console.log(message);
  postMessage(' world!');
}
```

Now we can send messages to the worker from the main thread with the `postMessage` method.
```javascript
worker.postMessage('hello');
```
#### ChildProcesses