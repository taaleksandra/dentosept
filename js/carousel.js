document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-slides-wrapper");
  const slides = document.querySelectorAll(".carousel-box");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const carouselContainer = document.querySelector(".carousel-wrapper");
  const paginationContainer = document.querySelector(".carousel-pagination");

  let currentIndex = 0;
  let autoSlide;

  // Obsługa przewijania slajdów
  const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Powrót do pierwszego slajdu
    }
    updateCarousel();
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1; // Powrót do ostatniego slajdu
    }
    updateCarousel();
  });

  // Tworzenie paginacji
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    paginationContainer.appendChild(dot);

    // Obsługa klikania w kropki
    dot.addEventListener("click", function () {
      currentIndex = index;
      updateCarousel();
      //   startAutoSlide();
    });
  });

  const dots = document.querySelectorAll(".carousel-dot");

  const updatePagination = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  // Uruchomienie automatycznego przewijania
  startAutoSlide();

  // Zatrzymanie karuzeli po najechaniu myszą
  carouselContainer.addEventListener("mouseenter", stopAutoSlide);

  // Wznowienie po opuszczeniu myszą
  carouselContainer.addEventListener("mouseleave", startAutoSlide);
});
