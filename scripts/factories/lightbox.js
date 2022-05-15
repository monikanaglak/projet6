
function showing_photos(medias) {
  const { id,price} = medias;
    function photosCardDOM(){
      const wrapperPhotos = document.createElement("div");
      wrapperPhotos.classList.add("photosdeux");
      const photosCardDOM = `
        <div class = "wrapper_gallery">
          <div class="gallery_show">
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
          price,
          photosCardDOM,
        };
}    