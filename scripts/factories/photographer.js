
/*to odcisk ktory tworzy sekcje dla kazdego fotografa na stronie glowniej*/

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/test/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const city_wrapper = document.createElement('div');
        city_wrapper.classList.add("wrapper_city");
        const city_photographer = document.createElement('h4');
        city_photographer.textContent = city + ","+ " " + country;
        const tagline_photographer = document.createElement('p');
        tagline_photographer.textContent = tagline;
        const price_photographer = document.createElement('p');
        price_photographer.classList.add("price");
        price_photographer.textContent = price + "€" + "/" + " " +"jour";
        article.appendChild(img);
        article.appendChild(h2);
        city_wrapper.appendChild(city_photographer);
        article.appendChild(city_wrapper);
        article.appendChild(tagline_photographer);
        article.appendChild(price_photographer);
        return (article);
    }
    return { name, picture, city, tagline, getUserCardDOM }
}
