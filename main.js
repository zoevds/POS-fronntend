let bodyElement = document.body,
  content = document.querySelector(".content-wrapper"),
  openButton = document.getElementById("open-button"),
  closeButton = document.getElementById("close-button");
let isOpen = false;

openButton.addEventListener("click", toggle);

if (closeButton) {
  closeButton.addEventListener("click", toggle);
}

content.addEventListener("click", function () {
  isOpen = bodyElement.classList.contains("js--menu-open");
  if (isOpen) toggle();
});

function toggle() {
  bodyElement.classList.toggle("js--menu-open");
}
