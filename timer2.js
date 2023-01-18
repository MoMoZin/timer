const inputData = process.argv.slice(2);
const key = inputData[0];

if (key === '\u0003') {
  process.stdout.write("Thanks for using me, ciao!");
  process.exit(0);
}
if (key === 'b') {
  console.log("beep");
}

const beep = (time) => {
  setTimeout(() => {
    console.log("beep");
    // process.stdout.write('\x07');
  }, time);
};

if (inputData) {
  for (const input of inputData) {
    if (Number(input)) {
      console.log(`Setting timer for ${input} seconds...`);
      if (Number(input) && Number(input) > 0) {
        beep(input * 1000);
      }
    }
  }
}
