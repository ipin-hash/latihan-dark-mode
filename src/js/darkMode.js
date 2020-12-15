let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#checkbox");

const enabledDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
}

if(darkMode === "enabled") {
  enabledDarkMode()
}

darkModeToggle.addEventListener("click", function() {
  darkMode = localStorage.getItem("darkMode");
  if(darkMode !== "enabled") {
    enabledDarkMode()
  } else {
    disableDarkMode()
  }
})