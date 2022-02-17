const Readline = require("readline");

const readline = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

exports.prompt = (prefix) => {
  return new Promise((resolve) => {
    readline.question(prefix, resolve);
  });
};
