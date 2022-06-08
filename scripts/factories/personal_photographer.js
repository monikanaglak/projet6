


function making_header(photographer) {
    const { name, portrait, city, country, tagline, id,alt} = photographer;
    const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;
    
    function photographerCardDOM (){
    const wrapperHeader = document.createElement("div");
    wrapperHeader.classList.add("photograph_header");
    wrapperHeader.classList.add(id);
    const photographerCardDOM = `
    <div class="container_header_photographer">
            <div class="photographer_info">
                <div id="card${photographer.id}">
                    <h2 tabindex="0" class="switch">${name}</h2>
                </div>
                <h3>${city}, ${country}</h3>
                <p>${tagline}</p>
            </div>
            
            <button type="button" class="contact_me contact_buttons switch">Contactez-moi</button>
            
            <div class="photographer_image switch" tabindex="0">
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
