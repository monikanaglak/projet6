

import {initPhotographer} from './test';
/*recouperation data photographers*/
async function getPhotographers() {
    const response = await fetch('./data/photographers.json');
    const photographers = response.json();
    return photographers;
  }
  /*display site pour le photographe qui été choisi  comment passer id?*/
  function displayHeader(photographers){
    const photographerMain = document.getElementById("photographer_card_header");
    photographers.forEach((photographer) => {
        const photographerPage = making_personal_website(photographer);
        const photographerCardDOM = photographerPage.photographerCardDOM();
        photographerMain.appendChild(photographerCardDOM)
   });
  }
  
  /*function dropdown*/
  
  function displayMenu(photographer){
     const menuBox = document.getElementById("menu_dropdown");
     const menu = dropDown(photographer);
     const menuCard = menu.menuCard();
     menuBox.appendChild(menuCard)
  };
  /*function for all boxes, 1.recoupere id the photographer clicker, regarde dans medias quel phoots il a avec des likes ect, pour chaque photo faire un div */
  function displayPhotos(photographer){
    const photosBox = document.getElementById("photos");
    const odpowiedz = photographers.filter(x => x.id == 'url_photographe');
    console.log(url_photographe)
    const box = showing_photos(photographer);
    const photosCardDOM = box.photosCardDOM();
    photosBox.appendChild(photosCardDOM);
  };
  
  /*function for droping menu*/
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
  
  async function init() {
    const { photographers } = await getPhotographers();
    
    const photographeID = window.location.search;
    const url_photographe = photographeID.slice(4);
    console.log(photographeID);
    console.log(url_photographe);
    
    /*const thomas = photographers.find((p)=>{console.log(p.id)});*/
   
    const selected_photographer = photographers.filter(
      (photographer) => photographer.id == url_photographe
    );
    displayHeader(selected_photographer);
    displayMenu(photographers);
    displayPhotos(selected_photographer)
  };
  init();