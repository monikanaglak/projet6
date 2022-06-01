function footerFactory(media,selected_photographer,total){
    const {price} = media;
    console.log(total)
    console.log(price)
    function total_likes_DOM(){
    const wrapper_likes = document.createElement("div"); 
    wrapper_likes.classList.add("footer_box");
    const footerCard = `
    <div class="container">
          <h3 class="titre_like">Total Likes:${total}</h3>
          <p>${price}/par jour</p>
    </div>`;
    wrapper_likes.innerHTML= footerCard;
    return wrapper_likes;
}
return{
    price,
    total,
    total_likes_DOM,
}
}
/*
function TotalLikesFactory(data) {
    // Récupération des données dont on a besoin
    const { id, photographerId, likes, price } = data;
  
    // Génération du code HTML qui sera inséré dans la page
    function TotalLikesDOM() {
      const container = document.createElement("div");
      container.classList.add("likes-price");
      container.setAttribute("tabIndex", "2");
      let cardTotalLikes = "";
  
      cardTotalLikes += `<div class="total_likes">`;
  
      cardTotalLikes += `<h3 class="total_likes_txt" >${likes}</h3>`;
  
      cardTotalLikes += `<i class="fas fa-heart" aria-label="likes"></i>`;
  
      cardTotalLikes += ` </div>
      <div class="price">
      <p>${price}&euro; / jour</p>
      </div>
      `;
  
      container.innerHTML = cardTotalLikes;
      return container;
    }
    return {
      id,
      photographerId,
      likes,
      price,
      TotalLikesDOM,
    };
  }
  */