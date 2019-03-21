var events = require("events");
var express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function() {
  console.log("I hear a scream!");
};

var openParachute = () => console.log("parachute opened");

eventEmitter.on("openIt", openParachute);

eventEmitter.emit("openIt");

//Assign the eventhandler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");
