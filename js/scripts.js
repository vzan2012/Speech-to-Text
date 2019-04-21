// Custom Scripts - Start

let speechRecognition = window.webkitSpeechRecognition;

let recognition = new speechRecognition();

let txtbox = document.querySelector(".txt-speech");

let btnStart = document.querySelector("#btn-start");
let btnEnd = document.querySelector("#btn-end");

let instruction = document.querySelector(".instruction-wrapper span");

let content = "";

recognition.continuous = true;

recognition.onresult = e => {
  let current = e.resultIndex;

  console.log("Current: " + current);

  let transcript = e.results[current][0].transcript;

  console.log("Transcript: " + transcript);

  content += transcript;

  txtbox.textContent = content;
};

recognition.onstart = () => {
  instruction.className = "text-success";
  instruction.textContent = "Voice recognition is ON";
};

recognition.onerror = e => {
  instruction.className = "text-danger";
  if (e.error == "no-speech") instruction.innerHTML = "Try Again";
};

btnStart.addEventListener("click", () => {
  if (content.length) content += "";

  recognition.start();
});

btnEnd.addEventListener("click", () => {
  txtbox.value = "";

  recognition.onspeechend = () => {
    instruction.className = "text-info";
    instruction.textContent = "No Activity";
  };

  recognition.onspeechend();
});

// txtbox.addEventListener('input', () => {
//     content = this.val();
// })

console.log(speechRecognition);
console.log(recognition);

// Custom Scripts - End
