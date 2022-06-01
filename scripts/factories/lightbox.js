function lightboxFactory(){
    const modalLightBox = document.createElement("article");
    /* modal carousel to rama gdzie bedzie slider*/
    modalLightBox.classList.add("modal_carrousel");
    const modalMediaDiv = document.createElement("div");
    modalMediaDiv.classList.add("modal_media");
    const mediasAll = document.querySelectorAll(".medias_all");
    const mediasTitleAll = document.querySelectorAll(
      ".photo_title h3");
        
      for (var i = 0; i < mediasAll.length; i++) {
      const modalMediaDiv = document.createElement("div");
      modalMediaDiv.classList.add("modal_media");
      modalMediaDiv.appendChild(mediasAll[i].cloneNode(true));
      modalMediaDiv.appendChild(mediasTitleAll[i].cloneNode(true));
      modalLightBox.appendChild(modalMediaDiv);
    }
  
    // Boutons de navigation
    let lightboxCardDOM  = `<a href="#" class="controls controls_left">
    <div role="button" class="control_btn" >
      <span class="img prev_image" >
        <i aria-hidden="true" class="fas fa-chevron-left"></i>
      </span>
      <p class="sr-only">Previous image</p>
    </div>
    </a>
    <a href="#" class="controls controls_right">
    <div role="button" class="control_btn">
      <span class="img next_image">
        <i aria-hidden="true" class="fas fa-chevron-right"></i>
      </span>
      <p class="sr-only">Next image</p>
    </div>
    </a>
    <button class="modal_close_btn" aria-label="close dialog">
    <img src="./assets/icons/close-red.svg" />
    </button>`;
  
    modalLightBox.innerHTML += lightboxCardDOM;
    return modalLightBox;
  }
  