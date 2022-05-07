
function showing_photos(photographer) {
  const { name, portrait, city, country, tagline, price, id, alt} = photographer;
    function photosCardDOM(){
      const wrapperPhotos = document.createElement("div");
      wrapperPhotos.classList.add("photosdeux");
      const photosCardDOM = `
        <div class = "wrapper_gallery">
          <div class="gallery_show"></div>
        </div>`;
        wrapperPhotos.innerHTML = photosCardDOM;
        return wrapperPhotos;
 }
        return {
          photosCardDOM,
        };
}    