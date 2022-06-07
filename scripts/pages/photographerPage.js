  /*fetching data des photographers*/
  async function fetchingPhotographers() {
        const response = await fetch('./data/photographers.json');
        const photographers = response.json();
        return photographers;
    }
  /*function injection header pour chaque photographe*/
  function displayHeader(photographers){
        const photographerMain = document.getElementById("photographer_card_header");
        photographers.forEach((photographer) => {
        const photographerPage = making_personal_website(photographer);
        const photographerCardDOM = photographerPage.photographerCardDOM();
        photographerMain.appendChild(photographerCardDOM)
       });
  }
  /*function menu dorpdown*/
  function displayMenu(photographer){
        const menuBox = document.getElementById("menu_dropdown");
        const menu = dropDown(photographer);
        const menuCard = menu.menuCard();
        menuBox.appendChild(menuCard)
       };
  
  function displayPhotos(media, url_photographe,photographer_all_filles,filter_by){
    console.log("filtre choisi " + filter_by);

        const photosBox = document.getElementById("container_images");
        const selected_photographer_media = media.filter((media)=>media.photographerId == url_photographe);
        
        let mediasphotographerFiltered = photographer_all_filles;
        console.log(mediasphotographerFiltered)
        if (filter_by === "popularity") {
          mediasphotographerFiltered = photographer_all_filles.sort((a, b) => {
           return a.likes - b.likes;
         });
        }
        if (filter_by === "title") {
          let mediasphotographerFilteredTitle = mediasphotographerFiltered.map((mediasphotographerFiltered) => mediasphotographerFiltered.title);
          console.log(mediasphotographerFilteredTitle)
           let monika = mediasphotographerFilteredTitle.sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          });
          console.log(monika)
          
        
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
        displayPhotos(media, url_photographe,photographer_all_files,"popularity");
        displayMenu(photographers);
        displayLightbox(photographer_pictures);
        
       /* displayFooter(url_photographe,total,photographers);*/
      
        displayContactForm(selected_photographer);
        formularz();
        makingLightbox(photographer_pictures);
        const sortByType = document.getElementById("select_images");
        sortByType.addEventListener("change", () => {
        const arrowUpDown = document.querySelector(".arrow-down");
        arrowUpDown.classList.toggle("rotated");
        });

      // Fonctionnement du tri evenement change est pour select utiliser
      sortByType.addEventListener("change", (e) => {
        if (e.target.value === "popularity") {
          console.log(e.target.value)
          displayPhotos(media,url_photographe,photographer_all_files,"popularity");
        }
        if (e.target.value === "date") {
          console.log(e.target.value)
          displayPhotos(media,url_photographe,photographer_all_files, "date");
        }
        if (e.target.value === "title") {
          displayPhotos(media,url_photographe,photographer_all_files,"title");
        }
      });
      AddClickHeart();
      AddClickEnter();
      countingLikes(photographer_all_likes);
    };
    initPhotographers();
     
    



