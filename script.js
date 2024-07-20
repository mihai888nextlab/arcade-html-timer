let timer;
let remainingTime = 0;

function startTimer() {
  const inputHours =
    parseInt(document.getElementById("input-hours").value) || 0;
  const inputMinutes =
    parseInt(document.getElementById("input-minutes").value) || 0;
  const inputSeconds =
    parseInt(document.getElementById("input-seconds").value) || 0;

  remainingTime = inputHours * 3600 + inputMinutes * 60 + inputSeconds;

  if (remainingTime > 0) {
    clearInterval(timer);
    updateTimer();
    timer = setInterval(updateTimer, 1000);
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("form").classList.add("hidden");
  }
}

function updateTimer() {
  if (remainingTime <= 0) {
    clearInterval(timer);
    alert("Time is up!");
    return;
  }

  remainingTime--;

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  document.getElementById("display-hours").textContent = String(hours).padStart(
    2,
    "0"
  );
  document.getElementById("display-minutes").textContent = String(
    minutes
  ).padStart(2, "0");
  document.getElementById("display-seconds").textContent = String(
    seconds
  ).padStart(2, "0");
}

function stopTimer() {
  clearInterval(timer);
  remainingTime = 0;
  document.getElementById("display-hours").textContent = "00";
  document.getElementById("display-minutes").textContent = "00";
  document.getElementById("display-seconds").textContent = "00";

  document.getElementById("timer").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
}
