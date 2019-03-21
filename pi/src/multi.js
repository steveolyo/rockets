var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});
board.on("ready", () => {
  var monitor = new five.Multi({
    controller: "BME280"
  });
});
