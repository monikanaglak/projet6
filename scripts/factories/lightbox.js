
function showing_photos(media, url_photographe) {
  const {photographerId, image, likes,} = media;
  const all_pictures = `./assets/photographers/${url_photographe}`
  const pictures = `./assets/photographers/${photographerId}/${image}`;
  console.log(photographerId)
 console.log(url_photographe)
  console.log(pictures)
  console.log(all_pictures)
    function photosCardDOM(){
      const wrapperPhotos = document.createElement("div");
      wrapperPhotos.classList.add("photosdeux");
      const photosCardDOM = `
        <div class = "wrapper_gallery">
          <div class="gallery_show">
          <img src="${pictures}"></img>
          
            <div class="wrapper_like">
              <div id="num">0</div>
              <div id="heart" onclick="likes()">
                <img src="./assets/icons/heart.svg" alt="icon coeur pour function like"></img>
              </div>
            </div>
          </div>
          
        </div>`;
        wrapperPhotos.innerHTML = photosCardDOM;
        return wrapperPhotos;
 }
        return {
          photographerId,
          likes,
          image,
          all_pictures,
          pictures,

          photosCardDOM,
        };
}    