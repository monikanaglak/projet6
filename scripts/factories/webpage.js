

/*to odcisk ktory tworzy sekcje dla kazdego fotografa na stronie glowniej*/

function making_personal_website(photographer) {
    const { name, portrait, city, country, tagline, price, id, alt } = photographer;
    const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;

    function photographerCardDOM (){
    const wrapperHeader = document.createElement("div");
    wrapperHeader.classList.add("photograph_header");
    wrapperHeader.classList.add(id);

    const photographerCardDOM = `
    <div class="container_header_photographer">
        <div class="photographer_info">
            <div id="card${photographer.id}">
                <h2>${name}</h2>
            </div>
            <h3>${city}, ${country}</h3>
            <p>${tagline}</p>
        </div>
        <div class="button_contact">
            <button class="contact_buttons" onclick="display-Modal()">Contactez-moi</button>
        </div>
        <div class="photographer_image">
            <img src="${picture}"></img>
        </div>
    </div>
     `;

    wrapperHeader.innerHTML = photographerCardDOM;
    return wrapperHeader;
  }

  return {
    id,
    name,
    portrait,
    city,
    country,
    tagline,
    alt,
    picture,
    photographerCardDOM,
  };
}

    




/*function factory_photographer_card(photographer){
    const {id, name, city, country, tagline, portrait} = photographer;
    const picture_page = `assets/photographers/test/${portrait}`;
     function photographer_header_DOM (){
         const header_personal = document.createElement('div');
         header_personal.classList.add('photograph-header');
         header_personal.classList.add(id);
         const page_photographer_card = `
         <div>
            <h1>${name}</h1>
        </div>
        <div>
            <h2>${city}</h2>
        </div>`;
        header_personal.innerHTML = page_photographer_card;
        return header_personal;
     }
        return(name,city, photographer_header_DOM)

}*/