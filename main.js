
// Gallery

const bannerGallery = document.querySelector("#bannerGallery");
const gallery = document.querySelectorAll(".gallery img");

for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener ("click", () => {
        bannerGallery.src = gallery[i].src;
    })
}
