// Save mood with time
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mood = btn.innerText;

    let moods = JSON.parse(localStorage.getItem("moodHistory")) || [];

    moods.push({
      mood: mood,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("moodHistory", JSON.stringify(moods));

    alert("Mood saved: " + mood);

    displayMoodHistory();
  });
});

// Show history
function displayMoodHistory() {
  let moods = JSON.parse(localStorage.getItem("moodHistory")) || [];
  const container = document.getElementById("history");

  if (!container) return;

  container.innerHTML = "";

  moods.slice().reverse().forEach((item) => {
    const div = document.createElement("div");
    div.style.padding = "8px";
    div.style.margin = "5px 0";
    div.style.background = "#f1f1f1";
    div.style.borderRadius = "6px";

    div.innerHTML = `${item.mood} <br><small>${item.time}</small>`;
    container.appendChild(div);
  });
}

window.onload = displayMoodHistory;