const darkModeToggle = document.getElementById("checkbox");

darkModeToggle.addEventListener("click", function() {
  
  let label = document.querySelector(".label");
  if(label.className == "label p") {
    label.classList.remove("p");
    label.innerHTML = "Light Mode";
  } else {
    label.classList.add('p');
    label.innerHTML= "Dark Mode";
  }

})
