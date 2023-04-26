let lastScroll = 10;
let afterScroll = 300;
let beforeScroll = 1400;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.height = "90px";
  } else {
    navbar.style.height = "50px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY < afterScroll) {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.translate = "-200px";
  } else {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.translate = "200px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY < beforeScroll) {
    popup.style.opacity = "0";
    popup.style.translate = "400px";
  } else {
    popup.style.opacity = "1";
    popup.style.translate = "-400px";
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.translate = "400px";
});

// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
