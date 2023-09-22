var counter = 0;
function increaseCounter() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}

document.getElementById("button").addEventListener("click", increaseCounter);
