    document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.getElementById("carouselexample");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const items = carousel.querySelectorAll(".carousel-item");

        function updateButtons() {
            let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));
            prevBtn.disabled = activeIndex === 0;
            nextBtn.disabled = activeIndex === items.length - 1;
        }

        carousel.addEventListener("slid.bs.carousel", updateButtons);
        updateButtons(); // Initialize on load
    });