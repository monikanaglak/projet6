
function showing_photos(media, url_photographe) {
 
  const all_pictures = `./assets/photographers/${url_photographe}`;
  const pictures = `./assets/photographers/${url_photographe}/${media}`;
  console.log(all_pictures);
  console.log(pictures);
    function photosCardDOM(){
      const wrapperPhotos = document.createElement("div");
      wrapperPhotos.classList.add("photosdeux");
      const photosCardDOM = `
        <div class = "wrapper_gallery">
          <div class="gallery_show">
            <img src="${all_pictures}"></img>
            <p>${title}</p>
            <div class="wrapper_like">
              <div class="num">0</div>
              <div class="heart" onclick="likes()">
                <img src="./assets/icons/heart.svg" alt="icon coeur pour function like"></img>
              </div>
            </div>
          </div>
        </div>`;
        wrapperPhotos.innerHTML = photosCardDOM;
        return wrapperPhotos;
 }
        
}    