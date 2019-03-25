const motionSensor = require("./mpu9250");

setInterval(() => {
  const motion = motionSensor.getMotion();
  console.log({ motion });
}, 1000);
