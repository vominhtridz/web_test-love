const register = document.getElementById("register");
const login = document.getElementById("login");
const loggedin = document.getElementById("loggedin");
const handle = JSON.parse(localStorage.getItem("login"));
if (handle) {
  register.classList.add("hidden");
  login.classList.add("hidden");
  loggedin.classList.remove("hidden");
}
function handleLogout() {
  localStorage.removeItem("login");
  window.location.reload();
}
