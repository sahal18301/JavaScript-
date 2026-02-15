function saveName() {
  let name = document.getElementById("nameInput").value;

  sessionStorage.setItem("username", name);

  document.getElementById("output").textContent = "Hello " + name;
}

function clearName() {
  sessionStorage.removeItem("username");

  document.getElementById("output").textContent = "Name cleared.";
}
