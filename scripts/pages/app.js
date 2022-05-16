export function initPhotographer() {
    // Récupère les datas des photographes
    fetch("./data/photographers.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { photographers } = data;
        const { media } = data;
        console.log(media)
        })
      
    }
    initPhotographer();
   