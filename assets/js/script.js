window.addEventListener("DOMContentLoaded", function () {
  const textInp = document.getElementById("textInp");
  const totalResult = document.getElementById("totalResult");
  const wordResult = document.getElementById("wordResult");
  const sentenceResult = document.getElementById("sentenceResult");
  const timeResult = document.getElementById("timeResult");
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const btnIcon = document.getElementById("btnIcon");
  const density = document.getElementById("density");

  const countCharacter = function (text) {
    const characters = text.split("");
    totalResult.textContent = characters.length.toString().padStart(2, "0");
  };

  const countWord = function (text) {
    if (!text) return 0;
    const words = text.split(" ");
    wordResult.textContent = words.length.toString().padStart(2, "0");
  };

  const countSentence = function (text) {
    const sentences = text.split(/[.?!\n]+/);
    sentenceResult.textContent = (sentences.length - 1)
      .toString()
      .padStart(2, "0");
  };

  const countTime = function (text) {
    const words = text.split(" ");
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

  const calculateLetterDensity = function (text) {
    const letterCount = {};
    const str = text.toLowerCase().replace(/s+/g, "");
    // const letter = new Set(str);
    for (const char of str) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
    for (const char in letterCount) {
      const percentage = (letterCount[char] / str.length) * 100;

      const html =`<div class="density_feature">
          <p class="letter" id="letter">${char}</p>
          <div class="progress"><div class="progress__bar" style="width: ${percentage}%" ></div>
        </div>
        </div>`;
      density.insertAdjacentHTML("beforeend", html);
    }
    console.log(letterCount);
  };

  textInp.addEventListener("input", function () {
    const text = textInp.value;
    countCharacter(text);
    countSentence(text);
    countWord(text);
    countTime(text);
    calculateLetterDensity(text);
  });

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnIcon.classList.toggle("fa-thin");
    btnIcon.classList.toggle("fa-moon");
  });
});
