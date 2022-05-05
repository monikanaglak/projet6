
function making_personal_lightbox(photographers) {
    const wrapperLightbox = document.createElement("div");
    wrapperLightbox.classList.add("photograph_lightbox");
    function lightboxCardDOM(){
    const lightboxCardDOM = `
  <div class = "lightbox_wrapper">
      <p>czemu nie dziala</p>
  </div>`;
   wrapperLightbox.innerHTML = lightboxCardDOM;
   return wrapperLightbox;
 }
 return {
    lightboxCardDOM,
  };
}    