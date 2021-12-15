var colorChangeInput = document.querySelector("header input");

colorChangeInput.addEventListener('change', switchenVanModus);

function switchenVanModus() {               /*met behulp van klasgenoot, ik vind dit erg lastig*/
  if( colorChangeInput.checked ) {
    document.documentElement.classList.add("darkMode");
  } else {
    document.documentElement.classList.remove("darkMode");
  }
}
