       
    /*main page accueil, ajouter au dom card crée dans accueil js*/
    async function getPhotographers() {
        const response = await fetch('./data/photographers.json');
        const photographers = response.json();
        return photographers;
    }
     function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = accueilFactory(photographer);
            const userCardDOM = photographerModel.accueilCardDOM();
            photographersSection.appendChild(userCardDOM);
         });
    };
    async function init() {
        const { photographers } = await getPhotographers();
        const {media} = await getPhotographers();
        console.log(photographers);
        console.log(media)
        displayData(photographers);
     };
    init();
     
    
     
