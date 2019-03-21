const Gpio = require("pigpio").Gpio;
// const bmp = require("./bmp280Rocket");

const motor = new Gpio(10, { mode: Gpio.OUTPUT });

let pulseWidth = 1000;
let increment = 100;

const led = new Gpio(17, { mode: Gpio.OUTPUT });
const button = new Gpio(4, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_DOWN,
  edge: Gpio.EITHER_EDGE
});

async function getAltimeterValues() {
  data = await bmp.getValues();
  console.log(data);
}

button.on("interrupt", level => {
  led.digitalWrite(level);
  // bmp.setZero(10);
  // var valor = getAltimeterValues();
  // console.log("valor" + valor);

  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
});
