
  async function fetchingPhotographers() {
        const response = await fetch('./data/photographers.json');
        const photographers = response.json();
        return photographers;
    }
  function displayHeader(photographers){
        const photographerMain = document.getElementById("photographer_card_header");
        photographers.forEach((photographer) => {
        const photographerPage = making_personal_website(photographer);
        const photographerCardDOM = photographerPage.photographerCardDOM();
        photographerMain.appendChild(photographerCardDOM)
       });
      }
  function displayMenu(photographer){
        const menuBox = document.getElementById("menu_dropdown");
        const menu = dropDown(photographer);
        const menuCard = menu.menuCard();
        menuBox.appendChild(menuCard)
       };
  
  function displayPhotos(media, url_photographe){
        const photosBox = document.getElementById("container_images");
        const selected_photographer_media = media.filter((media)=>media.photographerId == url_photographe);
        selected_photographer_media.forEach((artiste)=>{
        const box = showing_photos(artiste,url_photographe);
        const photosCardDOM = box.photosCardDOM();
        photosBox.appendChild(photosCardDOM);
      })
  }
  function displayLightbox(){
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.innerHTML = "";
    const LightBoxDOM = lightboxFactory();
    modalLightBox.appendChild(LightBoxDOM);
  }
  function displayFooter(selected_photographer,total,media){
    const footer_container = document.querySelector('#likes');
    const total_likes_model = footerFactory(media,media);
    const total_likes_DOM = total_likes_model.total_likes_DOM(total);
    footer_container.appendChild(total_likes_DOM);
    /*const monika = document.getElementsByClassName("titre_like h3")
    monika.textContent=total;*/
  }
  
  function displayContactForm(selected_photographer) {
    const cardFormSection = document.getElementById("contact_modal");
     selected_photographer.forEach((fotograf) => {
      const cardFormModel = contactFormFactory(fotograf);
      const cardFormDOM = cardFormModel.contactFormDOM();
      cardFormSection.appendChild(cardFormDOM);
    });
   };
  
  function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
  }
         window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    async function initPhotographers() {
        const { photographers, media } = await fetchingPhotographers();
        const photographeID = window.location.search;
        const url_photographe = photographeID.slice(4);

        const selected_photographer = photographers.filter(
        (photographer) => photographer.id == url_photographe
        );
        const photographer_all_files = media.filter((media)=>media.photographerId == url_photographe);

        const photographer_pictures = photographer_all_files.map((photographer_all_files) => photographer_all_files.image);

        const photographer_all_likes = photographer_all_files.map((photographer_all_files)=>photographer_all_files.likes);
        
        let total = countingLikes(photographer_all_likes);
      
        displayHeader(selected_photographer);
        displayMenu(photographers);
        displayPhotos(media, url_photographe);
        displayLightbox(photographer_pictures);
        AddClickHeart();
        countingLikes(photographer_all_likes);
        displayFooter(selected_photographer,total,media);
        const monika = document.getElementsByClassName("titre_like h3")
        console.log(monika.textContent)
        displayContactForm(selected_photographer);
        formularz();
        makingLightbox(photographer_pictures);
    };
    initPhotographers();
     
    



