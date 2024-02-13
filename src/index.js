function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["Sing like no one’s listening,"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
