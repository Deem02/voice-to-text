// const speakbtn = document.getElementById("speak");
// const text = document.querySelector("#text");

// speakbtn.addEventListener("click", () => {
//   let recog = new webkitSpeechRecognition();
//   recog.lang = "en-GB";
//   recog.onresult = (event) => {
//     text.value = event.results[0][0].transcript;
//   };
//   recog.start();
// });

const speakbtn = document.getElementById("speak");
const text = document.querySelector("#text");

speakbtn.addEventListener("click", () => {
  let recog = new webkitSpeechRecognition();
  recog.lang = "en-GB";
  recog.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    text.value = transcript;

    // Send the transcript to the PHP script using XMLHttpRequest
    sendTranscriptToServer(transcript);
  };
  recog.start();
});

function sendTranscriptToServer(transcript) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/voice-to-text/save_transcript.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.send("transcript=" + encodeURIComponent(transcript));
}