function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "48act90ae63f1b5o6545b0351a080b44";
  let context =
    "You are a life quote expert and love to share short life quotes with people. Your task is to generate 4 line life quotes in basic HTML. Do not include a title. Please make sure to follow user instructions and be clear and precise. Sign 'SheCodes AI' at the bottom after the Quote, on a new line with a <strong> element.";
  let prompt = `User instructions: Generate a life quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink"> ⏳ Generating your quote about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
