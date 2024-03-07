document.addEventListener("DOMContentLoaded", function () {
  // Анімація з'явлення для картинок
  const floatingImages = document.querySelectorAll(".floating-images");
  floatingImages.forEach(function (image, index) {
    setTimeout(function () {
      image.classList.add("animate");
    }, index * 500); // Додати затримку для кожної картинки
  });

  let slideIndex = 0;
  showSlides(slideIndex);

  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex = n;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  document.querySelector("#prev").addEventListener("click", function () {
    plusSlides(-1);
  });

  document.querySelector("#next").addEventListener("click", function () {
    plusSlides(1);
  });
});
