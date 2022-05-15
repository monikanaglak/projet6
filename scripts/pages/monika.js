
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
        const { photographers } = await fetchingPhotographers();
        const {media} = await fetchingPhotographers();
        const photographeID = window.location.search;
        const url_photographe = photographeID.slice(4);
  
  
  /*const thomas = photographers.find((p)=>{console.log(p.id)});*/
       const selected_photographer = photographers.filter(
      (photographer) => photographer.id == url_photographe
      );
    
    
       /*for (var klucz in media) {
        if (media.hasOwnProperty(klucz)) {
          console.log(klucz); // klucz, np: imie
          console.log(media[klucz]); // wartość, np: Jan
        }
      }*/
      const znaleziony_photograf_w_mediach = media.filter((media)=>media.photographerId == url_photographe);
      console.log(znaleziony_photograf_w_mediach);
      /*pobieranie zdjec*/
  
      
      /*ustawianie od najwiekszego do najmniejszego lajku*/
     /*  for (var key in znaleziony_photograf_w_mediach) {
        if (znaleziony_photograf_w_mediach.hasOwnProperty(key)) {
          console.log("co to jest" + key); // klucz, np: imie
          console.log(znaleziony_photograf_w_mediach[key]); // wartość, np: Jan
        }
      }*/
      const test = Object.values(znaleziony_photograf_w_mediach)
      console.log(test)
      for (const key in test) {
        console.log(test[key]);
      }
      
      
      console.log("to jest key" + Object.keys(znaleziony_photograf_w_mediach))
      



      displayHeader(selected_photographer);
      displayMenu(photographers);
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


