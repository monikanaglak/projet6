function dropDown(photographer){
    function menuCard(){
        const wrapperMenu = document.createElement("div");
        wrapperMenu.classList.add("box-deux");
    const menuCard = `
        <div class="menu_dropdown">
            <p class="titre_menu">Trier par :</p>
            <div class="dropdown">
                <options onclick="myFunction()" class="dropbtn" value="Popularité">Popularité</options>
                <div id="myDropdown" class="dropdown-content">
                    <options value="Data">Date</options>
                    <options value="Titre">Titre</options>
                </div>
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
