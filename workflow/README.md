# Concurrency model and Event Loop

- [Overview](#Overview)
- [Non Blocking](#non-blocking)
- [Non Blocking](#non-blocking)

#### Overview
JavaScript is a single threaded language. The js runtime enviroment is event loop based which is driven by messages. Each message gets run one at a time, and each message runs to completion. 

#### Non Blocking
A good JavaScript program uses various async api's and architectural patterns in order to not prevent other messages from executing. When on the front end, long and blocking operations will prevent the main thread from updating the UI, causing laggy end-user experience. On the server end, long, and blocking operations will cause node to not be able to service other requests while waiting.