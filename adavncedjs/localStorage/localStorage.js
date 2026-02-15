function saveName() {
  let name = document.getElementById("nameInput").value;

  localStorage.setItem("username", name);

  document.getElementById("output").textContent = "Hello " + name;
}

function clearName() {
  localStorage.removeItem("username");

  document.getElementById("output").textContent = "Name cleared.";
}
