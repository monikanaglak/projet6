
function showing_photos(media, url_photographe) {
  const {id,image,title,video,price,likes,date,alt} = media;
  const pictures = `./assets/photographers/${url_photographe}/${image}`;
  const videos = `./assets/photographers/${url_photographe}/${video}`;
    function photosCardDOM(){
      const wrapperPhotos = document.createElement("div");
      wrapperPhotos.classList.add("photo_clicked");
      let photosCardDOM = 
       `<a href ="#" class="media_link switch" data-mediaid=${id}  role="button" aria-label="${alt}" tabindex = "0" >`;
      if (video !== undefined) {
        photosCardDOM += `<video class="card_video medias_all switch" aria-label="${alt}" controls>
        <source src="${videos}" type="video/mp4">
        </video>`;
      }
     else {
      photosCardDOM += `<img class="card_image medias_all" src="${pictures}" alt="${alt}">`;
      }
      photosCardDOM += `
      </a>
      <div class="photo_info">
        <div class="photo_title switch" tabindex="0">
          <h3>${title}</h3>
        </div>
        <div class="wrapper_like">
            <div class="num">${likes}</div>
            <i class="fas fa-heart heart switch" tabindex="0" aria-label="likes" role="button"></i>
        </div>
      </div>
    `;
    wrapperPhotos.innerHTML = photosCardDOM;
    return wrapperPhotos;
  }
  return {
    id,
    video,
    title,
    image,
    likes,
    date,
    price,
    alt,
    videos,
    photosCardDOM,
  };
}

