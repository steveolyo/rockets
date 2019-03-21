const http = require("http");
const events = require("events");
var dt = require("./datemodule");
var eventEmitter = new events.EventEmitter();
var openParachute = () => console.log("parachute opened");

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send back a response and end the connection
  res.write(dt.myDateTime());
  res.end("Hello World!\n");

  if (0) {
    eventEmitter.emit("openIt");
  }
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
