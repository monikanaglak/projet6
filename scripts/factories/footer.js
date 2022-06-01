function footerFactory(photographer,selected_photographer,total){
    const {price} = selected_photographer;

    function total_likes_DOM(total){
    const wrapper_likes = document.createElement("div"); 
    wrapper_likes.classList.add("footer_box");
    const footerCard = `
    <div class="footer_info">
          <h3 class="titre_like">${total}</h3>
          <p class="price_footer>${price}/par jour</p>
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