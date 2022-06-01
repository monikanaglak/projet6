function dropDown(photographer){
    function menuCard(){
        const wrapperMenu = document.createElement("div");
        wrapperMenu.classList.add("box-deux");
    const menuCard = `
        <div class="menu_dropdown">
            <p class="titre_menu">Trier par :</p>
            <div class="dropdown switch">
                <options onclick="myFunction()" class="dropbtn switch" value="Popularité" tabindex="0">Popularité</options>
                <div id="myDropdown" class="dropdown-content switch">
                    <options value="Data" tabindex="0" class="switch">Date</options>
                    <options value="Titre" tabindex="0" class="switch">Titre</options>
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
