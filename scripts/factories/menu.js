function making_menu(photographer){
    const wrapperMenu = document.createElement("div");
    wrapperMenu.classList.add("boxdeux");
    function menuCard(){
    const menuCard = `
        <div class="menu_dropdown">
            <p class="titre_menu">Trier par :</p>
            <div class="dropdown">
                <div class="item one">Popularité</div>
                <hr>
                <div class="item two">Date</div>
                <hr>
                <div class="item three">Titre</div>
            </div>
        </div>
               
    `;
    wrapperMenu.innerHTML = menuCard;
    return wrapperMenu;
}
return{
    menuCard
}
}