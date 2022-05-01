
async function initPhotographer() {
    // Récupère infos of all photograpehrs
    const respone = await fetch('./data/photographers.json');
    const photographers = respone.json();
    return photographers;
}

async function displaySite(photographers){
    const photographerMain = document.getElementById("photographer-name");
    photographers.forEach((photographer) => {
        const photographerPage = making_personal_website(photographer);
        const photographerCardDOM = photographerPage.photographerCardDOM();
        photographerMain.appendChild(photographerCardDOM)
    });
}
/*async function displayHeader(photograpehrs){
    const photographerHead = document.getElementById("photo-head");
    photographers.forEach((photographer)=>{
        const photographerHeader = photographerFactoryHeader(photographer);
        const photographerCardHead = photographerHeader.photographerCardHead();
        photographerHeader.appendChild(photographerCardHead);

    })
}*/
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await initPhotographer();
    displaySite(photographers);
 };
init();