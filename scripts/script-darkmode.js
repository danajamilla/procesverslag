var colorChangeInput = document.querySelector("header input");

colorChangeInput.addEventListener('change', switchenVanModus);

function switchenVanModus() {
  if( colorChangeInput.checked ) {
    document.documentElement.classList.add("darkMode");
  } else {
    document.documentElement.classList.remove("darkMode");
  }
}
