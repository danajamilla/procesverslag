/******************** 
 HAMBURGERMENU
 ********************/
var hamburgerMenu = document.querySelector("nav button:nth-of-type(3)");

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);
// hamburgerMenu.addEventListener("click")
function toggleHamburgerMenu() {
    var navElement = document.querySelector("nav");
    navElement.classList.toggle("menuOpen");
}

/******************** 
 PIJL OMHOOG                            Eigen bedachte functie
 ********************/
var pijlOmhoog = document.querySelector("footer button:nth-of-type(1)");

pijlOmhoog.addEventListener("click", scrollToTop)

function scrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });                               /* https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo */
}




/********************   
 FAVORIETEN HARTJE                          Code sanne 
 ********************/

var hearts = document.querySelectorAll("section:nth-of-type(3) article button");

/* elke button laten luisteren naar een klik */
/* na een klik de functie 'toggleLove' uitvoeren */
hearts[0].addEventListener("click", addToFavorites);
hearts[1].addEventListener("click", addToFavorites);
hearts[2].addEventListener("click", addToFavorites);
hearts[3].addEventListener("click", addToFavorites);
hearts[4].addEventListener("click", addToFavorites);
hearts[5].addEventListener("click", addToFavorites);


/* liefde declareren of liefde wegnemen */
function addToFavorites(event) {
  /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
  var clickedHeart = event.target;
  
  /* als het hartje leeg is */
  if (clickedHeart.innerHTML == "🤍") {
    /* het lege hartje vervangen door het oranje hartje */
    clickedHeart.innerHTML = "🧡";
    /* en dan de functie aanroepen om de wishlist aan te passen */
    /* in dit geval moet er liefde bij, dus plus */
    updateWishlist("plus");
  }
  /* als het hartje oranje is */
  else {
    /* het oranje hartje vervangen door het lege hartje */
    clickedHeart.innerHTML = "🤍";
    /* en dan de functie aanroepen om de love-list aan te passen */
    /* in dit geval moet er liefde af, dus min */
    updateWishlist("min");
  }
}

/* de Wishlist in de nav in de header updaten */
/* de action die meegegeven wordt, is "plus" of "min" */
function updateWishlist(action) {
  /* het getal (de span) in de Wishlist-link in de nav opzoeken */
  /* die span in de variabele 'loveListAmount' opslaan */
  let wishlistAmount = document.querySelector("nav button:nth-of-type(2) span");
  
  /* het huidige aantal gele hartjes bepalen */
  let currentAmount = wishlistAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);
  
  /* het nieuwe aantal gele hartjes bepalen */
  /* te beginnen met een variabele om het nieuwe aantal in op te slaan */
  let newAmount;
  
  /* als er liefde bij moet */
  if (action == "plus") {
    /* het nieuwe aantal gele hartjes berekenen */
    newAmount = currentAmount + 1;
  }
  
  /* als er liefde af moet */
  else {
    /* het nieuwe aantal gele hartjes berekenen */
    newAmount = currentAmount - 1;
  }
  
  /* tenslotte het nieuwe aantal in de HTML zetten */
  wishlistAmount.innerHTML = newAmount;
}


 