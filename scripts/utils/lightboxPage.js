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
        //focus to image selected inside to lightbox
        const modalMediaTab = document.querySelectorAll(".modal_media");
        for (let i = 0; i < modalMediaTab.length; i++) {
          if (modalMediaTab[i].style.display === "block") {
            modalMediaTab[i].firstChild.focus();
          }
        }
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") {
        plusSlides(-1);
      } else if (e.code === "ArrowRight") {
        plusSlides(1);
      }
    });
  
    
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
  
    let getIndexMediaModal; 
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides((slideIndex += n));
      getIndexMediaModal = slideIndex; 
    }
  
    function currentSlide(n) {
      showSlides((slideIndex = n));
      getIndexMediaModal = slideIndex; 
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
      body_div.classList.remove("no-scroll");
  
      const lastMediaModal = document.querySelectorAll(".media_link");
      lastMediaModal[getIndexMediaModal - 1].focus();
      enableTabindexLightbox();
    });
  
    function enableTabindexLightbox() {
      let elements_rechange= document.querySelectorAll(".switch");
        elements_rechange.forEach((el)=>{
        el.setAttribute("tabIndex","0");
        })
    }
  }
  
  