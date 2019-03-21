const five = require("johnny-five");
const Raspi = require("raspi-io");

const board = five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var servo = new five.Servo({
    pin: "P1-32",
    startAt: 90
  });
  var lap = 0;

  servo.sweep().on("sweep:full", function() {
    console.log("lap", ++lap);

    if (lap === 1) {
      this.sweep({
        range: [40, 140],
        step: 10
      });
    }

    if (lap === 2) {
      this.sweep({
        range: [60, 120],
        step: 5
      });
    }

    if (lap === 3) {
      this.sweep({
        range: [80, 100],
        step: 1
      });
    }

    if (lap === 5) {
      process.exit(0);
    }
  });
});
