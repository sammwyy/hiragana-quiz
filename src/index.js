#!/usr/bin/env node
const Colors = require("colors/safe");
const Hiragana = require("./hiragana");
const Input = require("./input");

console.clear();

function requestExersice() {
  return new Promise(async (resolve) => {
    const chars = Hiragana.getRandomChars(3);

    let fonetic = [];
    let hiragana = [];

    for (const char of chars) {
      fonetic.push(char[0]);
      hiragana.push(char[1]);
    }

    console.log(
      Colors.cyan("Write the following characters in phonetic alphabet:")
    );
    console.log(Colors.rainbow(hiragana.join(" ")));

    const rawInput = await Input.prompt(Colors.yellow("\nAnswer: "));
    const userInput = rawInput.toLowerCase().trim().replace(/ /g, "");
    console.clear();
    if (userInput == fonetic.join("")) {
      console.log(Colors.green("The answer is correct!\n\n"));
      resolve(true);
    } else {
      console.log(
        Colors.red(
          "You have failed! The answer was: '" + fonetic.join(" ") + "'\n\n"
        )
      );
      resolve(false);
    }
  });
}

async function start() {
  let points = 0;

  for (let i = 0; i < 10; i++) {
    const success = await requestExersice();
    if (success) {
      points++;
    }
  }

  console.log(Colors.cyan("End of the game! Punctuation: " + points + "/10"));
  process.exit(0);
}

start();
