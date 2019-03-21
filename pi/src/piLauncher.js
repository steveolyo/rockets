const five = require("johnny-five");
const Raspi = require("raspi-io");

const board = five.Board({
  io: new Raspi()
});

board.on("ready", () => {
  //const pin = new five.Pin('P1-12');
  var motor = new five.Servo({
    pin: "P1-13",
    range: [45, 135],
    startAt: 120
  });

  var relay = new five.Relay("P1-12");

  console.log("toggling");
  relay.toggle();

  console.log("closing");
  relay.close();

  console.log("open");
  relay.open();
});
