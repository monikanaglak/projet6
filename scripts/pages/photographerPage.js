
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
  /*

let mediasphotographerFiltered = mediasphotographer;

  // En fonction du filtre choisi, on met à jour la liste
  if (filterBy === "popularity") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      return a.likes > b.likes;
    });
  }
  if (filterBy === "title") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (filterBy === "date") {
    mediasphotographerFiltered.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }
  */
  function displayPhotos(media, url_photographe,filter_by){
    console.log("filtre choisi " + filter_by)
        const photosBox = document.getElementById("container_images");
        const selected_photographer_media = media.filter((media)=>media.photographerId == url_photographe);
        let mediasphotographerFiltered = selected_photographer_media;
        if (filter_by === "popularity") {
          mediasphotographerFiltered = selected_photographer_media.sort((a, b) => {
            return a.likes > b.likes;
          });
        }
        if (filter_by === "title") {
          mediasphotographerFiltered = selected_photographer_media.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
        }
        if (filter_by === "date") {
          mediasphotographerFiltered.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
        }
        mediasphotographerFiltered.forEach((artiste)=>{
        const box = showing_photos(artiste,url_photographe);
        const photosCardDOM = box.photosCardDOM();
        photosBox.appendChild(photosCardDOM);
      })
  };
  function displayLightbox(){
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.innerHTML = "";
    const LightBoxDOM = lightboxFactory();
    modalLightBox.appendChild(LightBoxDOM);
  }

  /*function displayFooter(url_photographe,total,photographers){
    const footer_container = document.querySelector('#likes');
    console.log(url_photographe);
    
    const total_likes_model = footerFactory(photographers,url_photographe,total);
    const total_likes_DOM = total_likes_model.total_likes_DOM(total);
    footer_container.appendChild(total_likes_DOM);
  }*/
  
  function displayContactForm(selected_photographer) {
    const cardFormSection = document.getElementById("contact_modal");
     selected_photographer.forEach((fotograf) => {
      const cardFormModel = contactFormFactory(fotograf);
      const cardFormDOM = cardFormModel.contactFormDOM();
      cardFormSection.appendChild(cardFormDOM);
    });
   };
  
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
        displayPhotos(media, url_photographe, "popularity");
        displayLightbox(photographer_pictures);
        AddClickHeart();
        countingLikes(photographer_all_likes);
        /*displayFooter(url_photographe,total,photographers);*/
      
        displayContactForm(selected_photographer);
        formularz();
        makingLightbox(photographer_pictures);
        const sortByType = document.getElementById("select_images");
        console.log(sortByType);
        sortByType.addEventListener("change", () => {
        const arrowUpDown = document.querySelector(".arrow-down");
        arrowUpDown.classList.toggle("rotated");
        });

      // Fonctionnement du tri evenement change est pour select utiliser
      sortByType.addEventListener("change", (e) => {
        if (e.target.value === "popularity") {
          console.log(e.target.value)
          displayPhotos(media,url_photographe,"popularity");
        }
        if (e.target.value === "date") {
          console.log(e.target.value)
          displayPhotos(media,url_photographe, "date");
        }
        if (e.target.value === "title") {
          displayPhotos(media,url_photographe,"title");
        }
      });
    };
    initPhotographers();
     
    



