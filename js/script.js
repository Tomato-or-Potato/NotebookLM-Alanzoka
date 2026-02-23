const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

gallery.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});
    
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});