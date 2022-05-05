/*recouperation data photographers*/
async function getPhotographers() {
    const response = await fetch('./data/photographers.json');
    const photographers = response.json();
    return photographers;
}

async function init() {
    const photographeID = window.location.search.split("?").join("");
    const { photographers } = await getPhotographers();
    const photographer = photographers.find((p)=>{console.log(p.id)});
    console.log(photographers);
    console.log(photographeID);
    displaySite(photographers);
    displayLightbox(photographers);
    displayMenu(photographers);
};
init();
/*display site pour le photographe qui été choisi  comment passer id?*/
 function displaySite(photographers){
    const photographerMain = document.getElementById("photographer_card_header");
    photographers.forEach((photographer) => {
        const photographerPage = making_personal_website(photographer);
        const photographerCardDOM = photographerPage.photographerCardDOM();
        photographerMain.appendChild(photographerCardDOM)
    });
}

/*une nouvelle factory pour ça?, pour chaque element?*/
async function displayLightbox(photographers){
    const lightbox = document.getElementsByClassName("lightbox");
        const photographer_lightBox = making_personal_lightbox(photographers);
        const lightboxCardDOM = photographer_lightBox.lightboxCardDOM();
        lightbox.appendChild(lightboxCardDOM)
    
};
 function displayMenu(photographer){
     const menuBox = document.getElementById("box");
     const menu = making_menu(photographer);
     const menuCard = menu.menuCard();
     menuBox.appendChild(menuCard)
};
 
/*
function getPictures(){
    fetch('./assets/photographers/').then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=> console.log(error));
}
getPictures();
*/