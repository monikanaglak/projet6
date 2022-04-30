

/*to odcisk ktory tworzy sekcje dla kazdego fotografa na stronie glowniej*/

function photographerSiteFactory(photographer) {
    const { name, portrait, city, country, tagline, price } = photographer;

    const picture = `assets/photographers/test/${portrait}`;
    
    function photographerCardDOM() {
        const article = document.createElement( 'h2' );
        article.textContent = name;
        
        
        return (article);
    }
    return { name,photographerCardDOM }
}
function photographerFactoryHeader(photographer) {
    const { name} = photographer;
    function photographerCardHead() {
        const article = document.createElement( 'h2' );
        article.textContent = name;
        
        
        return (article);
    }
    return { name,photographerCardHead }
}
