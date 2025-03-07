const textInp = document.querySelector("#textInp");
const totalResult = document.querySelector("#totalResult");
const wordResult = document.querySelector("#wordResult");
const sentenceResult = document.querySelector("#sentenceResult");
const timeResult = document.querySelector("#timeResult");
const btn = document.querySelector(".light");
const countCharacter = function (txt) {
  const characters = txt.split("");
  totalResult.textContent = characters.length;
};
const countWord = function (txt) {
  const words = txt.split(" ");
  wordResult.textContent = words.length;
};
const countSentence = function (txt) {
  const sentences = txt.split(/[.?!]+/);
  sentenceResult.textContent = sentences.length - 1;
};
const countTime = function (txt) {
  const words = txt.split(" ");
  const time = words.length / 200;
  if (time < 1) {
    const second = time * 60;
    timeResult.textContent = `${Math.floor(second)}sec`;
  } else {
    timeResult.textContent = `${Math.floor(time)}min`;
  }
};
textInp.addEventListener("input", function () {
  const text = textInp.value;
  countCharacter(text);
  countSentence(text);
  countWord(text);
  countTime(text);
});
