    async function getPhotographers() {
        const response = await fetch('./data/photographers.json');
        const photographers = response.json();
        return photographers;
    }
    /*to musze rozgrysc*/
    /* funckja bierze data i selekcjonuje na stronie gdzie dane beda wczytane, dla kazdego fotografa tworzy zmienna ktora ma przypisana funckje -> photographerFactory tworzy strone i tworzy ja on the fly ( patrz photographer js), druga zmienna na utworzonej zmiennej, wywoluje kolejna funckje ktora jest w photographer factory*/
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
     };
    init();
    