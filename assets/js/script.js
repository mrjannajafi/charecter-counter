const textInp = document.querySelector("#textInp");
const totalResult = document.querySelector("#totalResult");
const wordResult = document.querySelector("#wordResult");
const sentenceResult = document.querySelector("#sentenceResult");
const timeResult = document.querySelector("#timeResult");
const toggleThemeBtn = document.getElementById("toggleTheme");
const bodyElement = document.body;

toggleThemeBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

const countCharacter = function (txt) {
  const characters = txt.split("");
  totalResult.textContent = characters.length.toString().padStart(2, "0");
};
const countWord = function (txt) {
  if (!txt) return 0;
  const words = txt.split(" ");
  wordResult.textContent = words.length.toString().padStart(2, "0");
};
const countSentence = function (txt) {
  const sentences = txt.split(/[.?!\n]+/);
  sentenceResult.textContent = (sentences.length - 1)
    .toString()
    .padStart(2, "0");
};
const countTime = function (txt) {
  const words = txt.split(" ");
  const time = words.length / 200;
  const seconds = Math.floor(time * 60);
  const hour = Math.floor(time / 60);

  if (time < 1) {
    timeResult.textContent = `${seconds}sec`;
  } else if (time < 60) {
    const sec = Math.floor(seconds % 60);
    const min = Math.floor(time);
    timeResult.textContent = `${min}min ${sec}sec`;
  } else {
    const sec = Math.floor(seconds % 60);
    const min = Math.floor(time % 60);

    timeResult.textContent = `${hour}hour ${min}min ${sec}sec`;
  }
};

textInp.addEventListener("input", function () {
  const text = textInp.value;
  countCharacter(text);
  countSentence(text);
  countWord(text);
  countTime(text);
});
