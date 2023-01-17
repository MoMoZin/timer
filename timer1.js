const inputData = process.argv.slice(2);

const beep = (time) => {
  setTimeout(() => {
    console.log("beep");
    // process.stdout.write('\x07');
  }, time);
};

if (inputData) {
  for (const input of inputData) {
    if (Number(input) && Number(input) > 0) {
      beep(input * 1000);
    }
  }
}
