function setGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greetingTitle");

  if (hour < 12) {
    greetingElement.innerText = "🌅 Good Morning";
  } else if (hour < 17) {
    greetingElement.innerText = "☀️ Good Afternoon";
  } else if (hour < 21) {
    greetingElement.innerText = "🌇 Good Evening";
  } else {
    greetingElement.innerText = "🌙 Good Night";
  }
}

setGreeting();

function showPromise() {
  const randomIndex = Math.floor(Math.random() * Cards.length);
  const verse = Cards[randomIndex];

  // Show verse
  document.getElementById("promiseText").innerText = verse;

  // Hide generate button
  document.getElementById("generateBtn").style.display = "none";

  // Show copy button
  document.getElementById("copyBtn").style.display = "inline-block";
}

function copyVerse() {
  const text = document.getElementById("promiseText").innerText;
  navigator.clipboard.writeText(text);
  alert("Verse copied!");

}

