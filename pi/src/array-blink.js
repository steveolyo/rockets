var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var array = new five.Leds(["P1-33", "P1-35"]);

  array.pulse();
});
