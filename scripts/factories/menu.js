function dropDown(photographer){
    function menuCard(){
        const wrapperMenu = document.createElement("div");
        wrapperMenu.classList.add("filter_images");
    const menuCard = `
        <div class="menu_dropdown">
            <label for="select_images" id="sort">Trier par:</label>
            <select id="select_images" data-trigger="select" tabindex="0" >
                <option value="popularity" tabindex="0">Popularité</option>
                <option value="date" tabindex="0">Date</option>
                <option value="title" tablindex="0">Titre</option>
            </select>
            <i class="fas fa-chevron-down arrow-down"></i>
        </div>
               
    `;
    wrapperMenu.innerHTML = menuCard;
    return wrapperMenu;
}
return{
    menuCard
}
}
