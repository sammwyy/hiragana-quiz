const HiraganaChars = {
  a: "あ",
  i: "い",
  u: "う",
  e: "え",
  o: "お",
  ka: "か",
  ki: "き",
  ku: "く",
  ke: "け",
  ko: "こ",
  sa: "さ",
  shi: "し",
  su: "す",
  se: "せ",
  so: "そ",
  ta: "た",
  chi: "ち",
  tsu: "つ",
  te: "て",
  to: "と",
  na: "な",
  ni: "に",
  nu: "ぬ",
  ne: "ね",
  no: "の",
  ha: "は",
  hi: "ひ",
  fu: "ふ",
  he: "へ",
  ho: "ほ",
  ma: "ま",
  mi: "み",
  mu: "む",
  me: "め",
  mo: "も",
  ya: "や",
  yu: "ゆ",
  yo: "よ",
  ra: "ら",
  ri: "り",
  ru: "る",
  re: "れ",
  ro: "ろ",
  wa: "わ",
  wo: "を",
  ga: "が",
  gi: "ぎ",
  gu: "ぐ",
  ge: "げ",
  go: "ご",
  za: "ざ",
  ji: "じ",
  zu: "ず",
  ze: "ぜ",
  zo: "ぞ",
  da: "だ",
  dji: "ぢ",
  dzu: "づ",
  de: "で",
  do: "ど",
  ba: "ば",
  bi: "び",
  bu: "ぶ",
  be: "べ",
  bo: "ぼ",
  pa: "ぱ",
  pi: "ぴ",
  pu: "ぷ",
  pe: "ぺ",
  po: "ぽ",
  v: "ゔ",
  n: "ん",
};

const HiraganaCharsPairs = [];

for (const key of Object.keys(HiraganaChars)) {
  HiraganaCharsPairs.push([key, HiraganaChars[key]]);
}

function getRandomChar() {
  return HiraganaCharsPairs[
    Math.floor(Math.random() * HiraganaCharsPairs.length)
  ];
}

function getRandomChars(count = 1) {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(getRandomChar());
  }

  return result;
}

module.exports = {
  HiraganaChars,
  HiraganaCharsPairs,
  getRandomChar,
  getRandomChars,
};
