


function making_personal_website(photographer) {
    const { name, portrait, city, country, tagline, price, id, alt} = photographer;
    const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;
    const photos = `./assets/photographers/${photographer.id}`;
    
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
    photos,
    photographerCardDOM,
  };
 }
