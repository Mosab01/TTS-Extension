document.addEventListener("DOMContentLoaded", function () {
  const speakButton = document.getElementById("speakButton");
  speakButton.addEventListener("click", speakText);
});

function speakText() {
  var your_api_key = config.API_KEY;
  const textInput = document.getElementById("textInput").value;

  const data = {
    text: textInput,
    model_id: "eleven_monolingual_v1",
    voice_settings: { stability: 0.5, similarity_boost: 0.5 },
  };

  fetch(
    "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream",
    {
      method: "POST",
      headers: {
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": your_api_key,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.blob())
    .then((blob) => {
      const audioUrl = URL.createObjectURL(blob);
      const audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.src = audioUrl;
      audioPlayer.play();
    })
    .catch((error) => console.error("Error:", error));
}
