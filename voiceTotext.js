const speakbtn = document.getElementById("speak");
const text = document.querySelector("#text");

speakbtn.addEventListener("click", () => {
  let recog = new webkitSpeechRecognition();
  recog.lang = "en-GB";
  recog.onresult = (event) => {
    text.value = event.results[0][0].transcript;
  };
  recog.start();
});