
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
        /*const odpowiedz = photographers.filter(x => x.id == 'url_photographe');*/
  
        const box = showing_photos(media);
        const photosCardDOM = box.photosCardDOM();
        photosBox.appendChild(photosCardDOM);
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
        console.log(media);
        /*id of photographer*/
        const photographeID = window.location.search;
        const url_photographe = photographeID.slice(4);
  
  
  /*const thomas = photographers.find((p)=>{console.log(p.id)});*/
       const selected_photographer = photographers.filter(
      (photographer) => photographer.id == url_photographe
      );
      console.log(url_photographe)
      /*finding all files of photographer that was clicked in json*/
      const selected_photographer_media = media.filter((media)=>media.photographerId == url_photographe);
      console.log(selected_photographer_media);

      displayHeader(selected_photographer);
      displayMenu(photographers);
      displayPhotos(media, url_photographe);
     };
    initPhotographers();
     
    
     
/*
function displayHeader(photographers){
    const photographerMain = document.getElementById("photographer_card_header");
    photographers.forEach((photographer) => {
        const photographerPage = making_personal_website(photographer);
        const photographerCardDOM = photographerPage.photographerCardDOM();
        photographerMain.appendChild(photographerCardDOM)
   });
  }




  
    

function fetchingPhotographers(){
    fetch('./data/photographers.json')
    .then((response)=>response.json()).then((data)=>console.log(data))
    const { photographers } = data;
    const { media } = data;
    console.log(media)
    console.log(photographers)
    displayHeader(photographers);
}
displayHeader(photographer)
fetchingPhotographers();

*/


