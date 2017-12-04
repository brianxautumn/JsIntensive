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
The [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) interface creates a new background task with a specified js file.

#### ChildProcesses