const Lcd = require("lcd");
const lcd = new Lcd({
  rs: 26,
  e: 19,
  data: [13, 6, 5, 11],
  cols: 8,
  rows: 2
});

lcd.on("ready", () => {
  setInterval(() => {
    lcd.setCursor(0, 0);
    lcd.print(new Date().toISOString().substring(11, 19), err => {
      if (err) {
        throw err;
      }
    });
  }, 1000);
});

// If ctrl+c is hit, free resources and exit.
process.on("SIGINT", () => {
  lcd.close();
  process.exit();
});
