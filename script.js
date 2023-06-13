// Scroll Increase Number Animasyonu
var numbers = document.querySelectorAll(".increase-number");
var triggerPosition = window.innerHeight * 0.8;

function animateNumber(number, endValue, duration) {
  var startValue = 0;
  var startTime = null;
  var isAnimating = true;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;

    var value = Math.floor((progress / duration) * (endValue - startValue));
    number.textContent = value;

    if (progress < duration && isAnimating) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function handleScroll() {
  if (window.scrollY > triggerPosition) {
    numbers.forEach(function (number) {
      var endValue = parseInt(number.dataset.target);
      var duration = 2000;
      animateNumber(number, endValue, duration);
    });

    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
// Sayfa F5 Animasyonu
window.addEventListener("load", function () {
  var loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
});
scroll;
// Y Animasyonu
const cards = document.querySelectorAll(".card");
const about = document.querySelector(".about");
window.addEventListener("scroll", checkCards);
checkCards();
function checkCards() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
  const cardTop = about.getBoundingClientRect().top;
  if (cardTop < triggerBottom) {
    about.classList.add("show");
  } else {
    about.classList.remove("show");
  }
}

//
const slider = document.querySelector(".wrapper");
let isDown = false;
let startX;
let scrollLeft;

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

slider.addEventListener("mousedown", start);
slider.addEventListener("touchstart", start);

slider.addEventListener("mousemove", move);
slider.addEventListener("touchmove", move);

slider.addEventListener("mouseleave", end);
slider.addEventListener("mouseup", end);
slider.addEventListener("touchend", end);

// Eklenen kısım
slider.addEventListener("click", (e) => {
  e.preventDefault();
});

// Eklenen kısım

// hero
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlides(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}
