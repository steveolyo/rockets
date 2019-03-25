const barometer = require("./bmpevent");
try {
  console.log(`Reading sensors`);
  let temp1 = 1;
  let temp2 = 0;
  setInterval(async () => {
    const barometerValues = await barometer.getValues();

    temp1 = barometerValues.temperature;

    if (temp1 != temp2) {
      console.log({ barometerValues });
      temp2 = temp1;
    }
  }, 250);
} catch (err) {
  console.log("fail");
}
