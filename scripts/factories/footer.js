function footerFactory(photographer,total){
    const {price} = photographer;
    

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
