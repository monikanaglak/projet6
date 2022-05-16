
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
        const photosBox = document.getElementById("photos");
        /*const photographeinMedia = media.filter(x => x.id == 'url_photographe');*/
        /*all media of photographer that was clicked found in json*/
        const selected_photographer_media = media.filter((media)=>media.photographerId == url_photographe);
        console.log(selected_photographer_media)
        /*for each file make box?*/
        selected_photographer_media.forEach((fotograf)=>{
        const box = showing_photos(media,url_photographe);
        const photosCardDOM = box.photosCardDOM();
        photosBox.appendChild(photosCardDOM);
      })
    }
    
/*function dropdown menu*/
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
        /*id of photographer*/
        const photographeID = window.location.search;
        const url_photographe = photographeID.slice(4);
  
  
  /*const thomas = photographers.find((p)=>{console.log(p.id)});*/
       const selected_photographer = photographers.filter(
      (photographer) => photographer.id == url_photographe
      );
    

      displayHeader(selected_photographer);
      displayMenu(photographers);
      displayPhotos(media, url_photographe);
     };
    initPhotographers();
     
    



