function makingLightbox(photographer_pictures){
  const modalLightBox = document.querySelector(".lightbox_modal");
  modalLightBox.style.display = "none";
  const all_medias = document.querySelectorAll(".media_link");
  const body_div = document.querySelector("body");
  const MainDiv = document.getElementById("main");
    MainDiv.setAttribute("aria-hidden", "false");
    modalLightBox.setAttribute("aria-hidden", "true");
    const mediasAllTab = document.querySelectorAll(".modal_media .medias_all");
    const txtLightBoxTab = document.querySelectorAll(".modal_media h3");
    for (let i = 0; i < mediasAllTab.length; i++) {
      mediasAllTab[i].setAttribute("tabIndex", "0");
    }
    for (let i = 0; i < txtLightBoxTab.length; i++) {
      txtLightBoxTab[i].setAttribute("tabIndex", "0");
    }
    const imageSelected = document.querySelectorAll(".media_link");
    for (let i = 0; i < imageSelected.length; i++) {
      imageSelected[i].addEventListener("click", (event) => {
        event.preventDefault();
        const modalLightBox = document.querySelector(".lightbox_modal");
        modalLightBox.style.display = "flex";
        MainDiv.setAttribute("aria-hidden", "true");
        body_div.classList.add("no-scroll");
        modalLightBox.setAttribute("aria-hidden", "false");
  
        currentSlide(i + 1);
        let elements_change= document.querySelectorAll(".switch");
        elements_change.forEach((el)=>{
        el.setAttribute("tabIndex","-1");
        })
        /*
        // disable tabindex for other divs outside form
        document.querySelector("header a").setAttribute("tabIndex", "-1"); //disable tabindex logo
        document.querySelector(".photograph-name").setAttribute("tabIndex", "-1"); //disable tabindex photogaph name header
        document.querySelector(".photograph-txt").setAttribute("tabIndex", "-1"); //disable tabindex photogaph city and tagline header
        document.querySelector(".contact_me").setAttribute("tabIndex", "-1"); //disable tabindex contact button header
        document.querySelector(".photograph-img").setAttribute("tabIndex", "-1"); //disable tabindex image photographer header
        document.querySelector(".likes-price").setAttribute("tabIndex", "-1"); //disable tabindex footer likes
        document.querySelector("#sort").setAttribute("tabIndex", "-1"); //disable tabindex sort by text
        document.querySelector("#select_images").setAttribute("tabIndex", "-1"); //disable tabindex sort button
  
        const imageSelected = document.querySelectorAll(".media_link"); //select tabindex medias catalog
        const imageTxt = document.querySelectorAll(".photograph-catalog-txt"); //select tabindex medias catalog title
        const imageLike = document.querySelectorAll(".photograph-catalog-icon"); //select tabindex medias catalog like number
        const imageLikeHeart = document.querySelectorAll(".like_img"); //select tabindex medias catalog like heart icon
  
        for (let i = 0; i < imageSelected.length; i++) {
          imageSelected[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog
          imageTxt[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog title
          imageLike[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog like number
          imageLikeHeart[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog like heart icon
        }
  
        //disable tabindex video catalog
        const videoCatalog = document.querySelectorAll(".media_link .card_video");
        for (let i = 0; i < videoCatalog.length; i++) {
          videoCatalog[i].setAttribute("tabIndex", "-1");
        }
        */
        //focus to image selected inside to lightbox
        const modalMediaTab = document.querySelectorAll(".modal_media");
        for (let i = 0; i < modalMediaTab.length; i++) {
          if (modalMediaTab[i].style.display === "block") {
            modalMediaTab[i].firstChild.focus();
          }
        }
      });
    }
  
    // navigation with arrow keys <>
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") {
        plusSlides(-1);
      } else if (e.code === "ArrowRight") {
        plusSlides(1);
      }
    });
  
    //controls lightbox prev/next <> click
    const linkPrevLightBox = document.querySelector(".prev_image");
    linkPrevLightBox.addEventListener("click", (event) => {
      event.preventDefault();
      plusSlides(-1);
    });
    const linkNextLightBox = document.querySelector(".next_image");
    linkNextLightBox.addEventListener("click", (event) => {
      event.preventDefault();
      plusSlides(1);
    });
    //controls lightbox prev/next <> enter
    const linkPrevEnterLightBox = document.querySelector(".controls_left");
    linkPrevEnterLightBox.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        e.preventDefault();
        plusSlides(-1);
      }
    });
    const linkNextEnterLightBox = document.querySelector(".controls_right");
    linkNextEnterLightBox.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        e.preventDefault();
        plusSlides(1);
      }
    });
  
    let getIndexMediaModal; //get value of media modal
  
    // animation of lightbox
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides((slideIndex += n));
      getIndexMediaModal = slideIndex; //get value of position media modal
    }
  
    function currentSlide(n) {
      showSlides((slideIndex = n));
      getIndexMediaModal = slideIndex; //get value of position media modal
    }
  
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("modal_media");
  
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[slideIndex - 1].style.display = "block";
    }
  
    // close lightboxmodal
    const closeLightBoxModal = document.querySelector(".modal_close_btn");
    closeLightBoxModal.addEventListener("click", () => {
      const modalLightBox = document.querySelector(".lightbox_modal");
      modalLightBox.style.display = "none";
      MainDiv.setAttribute("aria-hidden", "false");
      modalLightBox.setAttribute("aria-hidden", "true");
      bodyDiv.classList.remove("no-scroll");
  
      const lastMediaModal = document.querySelectorAll(".media_link"); //select last media modal
      lastMediaModal[getIndexMediaModal - 1].focus();
      enableTabindexLightbox();
    });
  
    function enableTabindexLightbox() {
      // enable tabindex for other divs outside form
      document.querySelector("header a").setAttribute("tabIndex", "1"); //enable tabindex logo
      document.querySelector(".photograph-name").setAttribute("tabIndex", "2"); //enable tabindex photogaph name header
      document.querySelector(".photograph-txt").setAttribute("tabIndex", "2"); //enable tabindex photogaph city and tagline header
      document.querySelector(".contact_me").setAttribute("tabIndex", "2"); //enable tabindex contact button header
      document.querySelector(".photograph-img").setAttribute("tabIndex", "2"); //enable tabindex image photographer header
      document.querySelector(".likes-price").setAttribute("tabIndex", "2"); //enable tabindex footer likes
      document.querySelector("#sort").setAttribute("tabIndex", "0"); //enable tabindex sort by text
      document.querySelector("#select_images").setAttribute("tabIndex", "0"); //enable tabindex sort button
  
      const imageSelected = document.querySelectorAll(".media_link"); //select tabindex medias catalog
      const imageTxt = document.querySelectorAll(".photograph-catalog-txt"); //select tabindex medias catalog title
      const imageLike = document.querySelectorAll(".photograph-catalog-icon"); //select tabindex medias catalog like number
      const imageLikeHeart = document.querySelectorAll(".like_img"); //select tabindex medias catalog like heart icon
  
      for (let i = 0; i < imageSelected.length; i++) {
        imageSelected[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog
        imageTxt[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog title
        imageLike[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog like number
        imageLikeHeart[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog like heart icon
      }
  
      //enable tabindex video catalog
      const videoCatalog = document.querySelectorAll(".media_link .card_video");
      for (let i = 0; i < videoCatalog.length; i++) {
        videoCatalog[i].removeAttribute("tabIndex", "-1");
      }
    }
  }
  
  