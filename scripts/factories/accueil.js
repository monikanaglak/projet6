/*to odcisk ktory tworzy sekcje dla kazdego fotografa na stronie glowniej*/

function accueilFactory(photographer) {
  const { id, name, portrait, city, country, tagline, price } = photographer;
  const picture = `./assets/photographers/PhotographersPortrait/${portrait}`;
  function accueilCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer_section_cliked");
    article.classList.add(id);
    const accueilCardDOM = `
        
            <a href="./photographer.html?id=${id}">
                <div class="card_image">
                    <img src="${picture}"></img>
                </div>
            </a>
                <div class="card_infos">
                    <h2>${name}</h2>
                    <h3>${city}, ${country}</h3>
                    <p>${tagline}</p>
                    <p>${price}€/jour</^p>
                </div>
        `;
    article.innerHTML = accueilCardDOM;
    return article;
  }
  return {
    id,
    picture,
    name,
    city,
    country,
    tagline,
    price,
    accueilCardDOM,
  };
}
