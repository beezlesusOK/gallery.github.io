function SlidesPlugin(ActiveSlide = 0) {
    const slides = document.querySelectorAll('.slide');

slides [ActiveSlide].classList.add('active');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        ClearActiveClasses()

        slide.classList.add('active');
    });
};
function ClearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}
}
SlidesPlugin();