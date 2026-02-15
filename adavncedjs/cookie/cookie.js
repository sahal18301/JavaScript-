function setCookie(name, value, days) {
  let expires = "";

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();

    if (c.indexOf(name + "=") === 0) {
      return c.substring(name.length + 1);
    }
  }

  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function saveName() {
  let name = document.getElementById("nameInput").value;

  setCookie("username", name, 7); // saves for 7 days

  document.getElementById("output").textContent = "Hello " + name;
}

function clearName() {
  deleteCookie("username");

  document.getElementById("output").textContent = "Name cleared.";
}
