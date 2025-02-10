const galleryImages = document.querySelectorAll('.gallery-images img');
const activeImageBox = document.querySelector('.gallery-active-image img');
const activeImageBoxText = document.querySelector('.gallery-active-image p');
const galleryInterval = 4000;
let activeImageIndex = 0;

const setActiveImage = (image) => {
    galleryImages.forEach((img) => {
        img.classList.remove('active');
    });

    image.classList.add('active');
    activeImageBox.src = image.src;
    activeImageBoxText.textContent = image.alt;
}

setActiveImage(galleryImages[0]);

setInterval(() => {
    activeImageIndex = activeImageIndex == galleryImages.length - 1 ? 0 : activeImageIndex + 1;
    setActiveImage(galleryImages[activeImageIndex]);
}, galleryInterval);

galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        const index = Array.from(galleryImages).indexOf(img);
        activeImageIndex = index;
        setActiveImage(galleryImages[activeImageIndex]);
    });
});