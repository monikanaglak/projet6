/*recouperation data photographers*/
async function getPhotographers() {
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

/*function dropdown*/

function displayMenu(photographer){
   const menuBox = document.getElementById("menu_dropdown");
   const menu = dropDown(photographer);
   const menuCard = menu.menuCard();
   menuBox.appendChild(menuCard)
};
/*function for all boxes */
function displayPhotos(photographers){
  const photosBox = document.getElementById("photos");
  photographers.forEach((photographer) => {
  const box = showing_photos(photographers);
  const photosCardDOM = box.photosCardDOM();
  photosBox.appendChild(photosCardDOM);
});
}

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
/*img.addEventListener("click", function(e) {
  console.log(e.target.src);
})
target with image was clicked form working with images in javascript
document.body.appendChild(img);
*/

async function init() {
  const { photographers } = await getPhotographers();
 
  const photographeID = window.location.search;
  const url_photographe = photographeID.slice(4);
  console.log(url_photographe);
  
  /*const thomas = photographers.find((p)=>{console.log(p.id)});*/
  const selected_photographer = photographers.filter(
    (photographer) => photographer.id == url_photographe
  );
  displayHeader(selected_photographer);
  displayMenu(photographers);
  displayPhotos(photographers)
};
init();