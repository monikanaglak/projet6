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
        const photographerPage = making_header(photographer);
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

  function displayContactForm(selected_photographer) {
    const cardFormSection = document.getElementById("contact_modal");
     selected_photographer.forEach((fotograf) => {
      const cardFormModel = contactFormFactory(fotograf);
      const cardFormDOM = cardFormModel.contactFormDOM();
      cardFormSection.appendChild(cardFormDOM);
    });
   }; 

   function displayPhotos(media,photographer_all_files,filterBy){
        console.log(photographer_all_files)
        const wrapper_images = document.getElementById("container_images");
        /*const selected_photographer_media = media.filter((media)=>media.photographerId == url_photographe);*/
        
        let mediasphotographerFiltered = photographer_all_files;
        if (filterBy === "popularity") {
          mediasphotographerFiltered = photographer_all_files.sort((a, b) => {
           return a.likes - b.likes;
         });
        }
        if (filterBy === "title") {
          
          mediasphotographerFiltered = photographer_all_files.sort((a, b) => {
            
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
            if (fa < fb) {
              console.log(mediasphotographerFiltered)
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        }
        if (filterBy === "date") {
          mediasphotographerFiltered = photographer_all_files.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
        }
        wrapper_images.innerHTML ="";
        mediasphotographerFiltered.forEach((shoot)=>{
        const box = showing_photos(shoot);
        const photosCardDOM = box.photosCardDOM();
        wrapper_images.appendChild(photosCardDOM);
      })
  };

  function displayLightbox(){
    const modalLightBox = document.querySelector(".lightbox_modal");
    modalLightBox.innerHTML = "";
    const LightBoxDOM = lightboxFactory();
    modalLightBox.appendChild(LightBoxDOM);
  }

  function displayFooter(url_photographe,total,photographers){
    const footer_container = document.querySelector('#likes');
    const total_likes_model = footerFactory(photographers,url_photographe,total);
    const total_likes_DOM = total_likes_model.total_likes_DOM(total);
    footer_container.appendChild(total_likes_DOM);
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
        displayPhotos(media,photographer_all_files,"popularity");
        displayLightbox(photographer_pictures);
        
       displayFooter(url_photographe,total,photographers);
      
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
          displayPhotos(media,photographer_all_files,"popularity");
        }
        if (e.target.value === "date") {
          console.log(e.target.value)
          displayPhotos(media,photographer_all_files,"date");
        }
        if (e.target.value === "title") {
          console.log(e.target.value)
          displayPhotos(media,photographer_all_files,"title");
        }
      });
      AddClickHeart();
      AddClickEnter();
      countingLikes(photographer_all_likes);
    };
    initPhotographers();
     
    



